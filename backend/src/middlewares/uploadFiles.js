const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../public/uploads'))
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname))
	},
})

var upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
			cb(null, true)
		} else {
			console.log('Only pgn & jpg files are supported')
			cb(null, false)
		}
	},
})

module.exports = upload
