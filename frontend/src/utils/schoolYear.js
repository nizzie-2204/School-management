const schoolYears = () => {
	let result = []

	for (let i = 2010; i < 2050; i++) {
		result.push(`${i}-${i + 1}`)
	}

	return result
}

export default schoolYears
