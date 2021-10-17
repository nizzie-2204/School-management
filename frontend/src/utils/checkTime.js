const checkTime = ({ time, day, date }) => {
	const x = { time: '11:00 - 11:45', day: 'Monday', date: '10/18/2021' }

	const currTime = new Date().getTime()
	const startTime = new Date(date.toLocaleString().slice(0, 9)).setHours(
		parseInt(time.slice(0, 2)),
		parseInt(time.slice(3, 5))
	)
	const endTime = new Date(date.toLocaleString().slice(0, 9)).setHours(
		parseInt(time.slice(-5, -3)),
		parseInt(time.slice(-2))
	)

	if (currTime >= startTime && currTime <= endTime) {
		return 'Vào học'
	}

	if (currTime > endTime) {
		return 'Đã diễn ra'
	}

	if (currTime < startTime) {
		return 'Chưa diễn ra'
	}
}

export default checkTime
