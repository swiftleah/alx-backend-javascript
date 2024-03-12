export default function updateUniqueItems(groceriesmap) {
	if (!(groceriesmap instanceof Map)) {
		throw new Error('Cannot process');
	}

	for (const [item, quantity] of groceriesmap) {
		if (quantity === 1) {
			groceriesmap.set(item, 100);
		}
	}
}
