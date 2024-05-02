const Utils = {
  calculateNumber(type, a, b) {
	  switch (type) {
		case "SUM":
			return (Math.round(a) + Math.round(b));
		case "SUBTRACT":
			return (Math.round(a) -  Math.round(b));
		case "DIVIDE":
			let roundeda = Math.round(a);
			let roundedb = Math.round(b);

			if (roundedb == 0) {
				return "Error"
			}
			return roundeda/roundedb
		}
  }
};

module.exports = Utils;
