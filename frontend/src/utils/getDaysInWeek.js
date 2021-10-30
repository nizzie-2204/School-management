import addDays from 'date-fns/addDays'
import startOfWeek from 'date-fns/startOfWeek'

const getDaysInWeek = () => {
	const days = []
	for (let i = 0; i < 5; i++) {
		const day = addDays(
			startOfWeek(new Date(), {
				weekStartsOn: 1,
			}),
			i
		)

		days.push(day)
	}

	return days
}

export default getDaysInWeek
