export default function cleanSet(set, startString) {
	if (!set || !startString || typeof startString !== 'string') {
		return '';
	}
	const filtered = Array.from(set)
		.filter(value => typeof value === 'string' && value.startsWith(startString))
		.map(value => value.substring(startString.length))
		.filter(valueSubStr => valueSubStr && valueSubStr !== "");

	return filtered.join('-');
}
