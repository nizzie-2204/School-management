const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')

// Route
const authRoute = require('./src/routes/v1/authRoute')
const adminRoute = require('./src/routes/v1/adminRoute')
const teacherRoute = require('./src/routes/v1/teacherRoute')
const studentRoute = require('./src/routes/v1/studentRoute')
const subjectRoute = require('./src/routes/v1/subjectRoute')
const classRoute = require('./src/routes/v1/classRoute')
const examRoute = require('./src/routes/v1/examRoute')
const examResultRoute = require('./src/routes/v1/examResultRoute')
dotenv.config()

// if (process.env.NODE_ENV !== 'production') {
// 	app.use(morgan('combined'))
// }

app.use(cors())
app.use(express.json())

app.use(express.static(`${__dirname}/src/public`))
const { connectDB } = require('./src/configs/mongodb')
connectDB()

// Mount the route
app.use(
	'/api/v1/',
	authRoute,
	teacherRoute,
	adminRoute,
	studentRoute,
	subjectRoute,
	classRoute,
	examRoute,
	examResultRoute
)

// Import error handler
const { errorHandler } = require('./src/middlewares/errorHandler')
const { dirname } = require('path')

// Unhandled route
app.all('*', (req, res, next) => {
	const err = new Error('The route can not be found')
	err.statusCode = 404
	next(err)
})
app.use(errorHandler)

app.listen(process.env.PORT, () => {
	console.log('Server is running ...')
})
