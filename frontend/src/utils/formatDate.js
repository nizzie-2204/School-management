const formatDate = (date) => {
	const thisDate = new Date(date)
	let hour = thisDate.getHours()
	let minute = thisDate.getMinutes()
	let currDate = thisDate.toLocaleDateString('vi-VN', {
		timeZone: 'UTC',
	})

	if (minute < 10) {
		minute = '0' + minute
	}

	return `${hour}:${minute} ${currDate}`
}

export default formatDate
