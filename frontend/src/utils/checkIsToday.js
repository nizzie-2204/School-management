const checkIsToday = (date) => {
	const today = new Date()
	return (
		date?.getDate() === today.getDate() &&
		date?.getMonth() === today.getMonth() &&
		date?.getFullYear() === today.getFullYear()
	)
}

export default checkIsToday
