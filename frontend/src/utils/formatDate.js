const formatDate = (date) => {
	const thisDate = new Date(date)

	const hour = thisDate.getHours()
	const minute = thisDate.getMinutes()
	const currDate = thisDate.toLocaleDateString('vi-VN', {
		timeZone: 'UTC',
	})

	return `${hour}:${minute} ${currDate}`
}

export default formatDate
