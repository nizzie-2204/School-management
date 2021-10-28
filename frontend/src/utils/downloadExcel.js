import XLSX from 'xlsx'

const downloadExcel = (data, titleSheet, titleFile) => {
	const newData = data.map((row) => {
		delete row.tableData
		return row
	})

	const workSheet = XLSX.utils.json_to_sheet(newData)
	const workBook = XLSX.utils.book_new()
	XLSX.utils.book_append_sheet(workBook, workSheet, titleSheet)
	//Buffer
	let buf = XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' })
	//Binary string
	XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' })
	//Download
	XLSX.writeFile(workBook, `${titleFile}.xlsx`)
}

export default downloadExcel
