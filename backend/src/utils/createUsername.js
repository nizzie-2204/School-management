const createUsername = (number, role) => {
	let character = '';
	role === 'student' ? (character = 's') : (character = 't');
	let username = character + new Date().getFullYear().toString().slice(2);

	if (number === undefined) {
		return username + '00001';
	} else {
		const maxLength = 5 - parseInt(number).toString().length;
		let string = '';

		if (maxLength > 0) {
			for (let i = 0; i < maxLength; i++) {
				if (i === 0) {
					string = '0' + (Number(number) + 1).toString() + string;
				} else {
					string = '0' + string;
				}
			}
		} else {
			string = (Number(number) + 1).toString();
		}

		return username + string;
	}
};

module.exports = createUsername;
