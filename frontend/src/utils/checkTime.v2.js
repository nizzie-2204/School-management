import addMinutes from 'date-fns/addMinutes'

const checkTimeV2 = (date, minute) => {
	const startAt = new Date(date).getTime()
	const endAt = addMinutes(new Date(date), minute)

	const currDate = new Date().getTime()

	if (currDate < startAt && currDate < endAt) {
		return 'Chưa diễn ra'
	}

	if (startAt <= currDate && currDate <= endAt) {
		return 'Đang diễn ra'
	}

	if (currDate > endAt && currDate > startAt) {
		return 'Đã kết thúc'
	}
}

export default checkTimeV2
