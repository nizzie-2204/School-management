const checkTime = ({ time, day, date, role }) => {
	const x = { time: '11:00 - 11:45', day: 'Monday', date: '10/18/2021' }

	// 	Tên đề thi: đề thi môn TA
	// Loại kỳ thi: giữa hk1
	// Khối: 1
	// Môn: TA
	// Thời gian làm bài: 60p
	// Thời gian tối thiếu nộp bài: 30p
	// Thời gian làm bài: 1/1/2021 9:45

	// File đề thi:

	const currTime = new Date().getTime()
	const startTime = new Date(date?.toLocaleString().slice(0, 10)).setHours(
		parseInt(time?.slice(0, 2)),
		parseInt(time?.slice(3, 5))
	)
	const endTime = new Date(date?.toLocaleString().slice(0, 10)).setHours(
		parseInt(time?.slice(-5, -3)),
		parseInt(time?.slice(-2))
	)

	if (currTime >= startTime && currTime <= endTime) {
		if (role !== 'teacher') {
			return 'Vào học'
		} else {
			return 'Vào dạy'
		}
	}

	if (currTime > endTime) {
		return 'Đã kết thúc'
	}

	if (currTime < startTime) {
		return 'Chưa diễn ra'
	}
}

export default checkTime
