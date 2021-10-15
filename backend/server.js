const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

// Route
const authRoute = require('./src/routes/v1/authRoute')
const adminRoute = require('./src/routes/v1/adminRoute')
const teacherRoute = require('./src/routes/v1/teacherRoute')
const teacherTypeRoute = require('./src/routes/v1/teacherType')
const studentRoute = require('./src/routes/v1/studentRoute')
const subjectRoute = require('./src/routes/v1/subjectRoute')
const classRoute = require('./src/routes/v1/classRoute')
const examRoute = require('./src/routes/v1/examRoute')
const examResultRoute = require('./src/routes/v1/examResultRoute')

// if (process.env.NODE_ENV !== 'production') {
// 	app.use(morgan('combined'))
// }
dotenv.config()
app.use(cors())
app.use(express.json())

// Upload images to public folder
app.use(express.static(`${__dirname}/src/public`))

// Connect DB
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
	examResultRoute,
	teacherTypeRoute
)

// Import error handler
const { errorHandler } = require('./src/middlewares/errorHandler')
app.use(errorHandler)

// Unhandled route
app.all('*', (req, res, next) => {
	const err = new Error('The route can not be found')
	err.statusCode = 404
	next(err)
})

// Connect socket.io
io.on('connection', (socket) => {
	console.log(`New user connected: ${socket.id}`)

	socket.on('disconnect', () => {
		socket.disconnect()
		console.log('User disconnected!', socket.id)
	})

	socket.on('BE-check-user', ({ roomId, userName }) => {
		let error = false

		io.sockets.in(roomId).clients((err, clients) => {
			clients.forEach((client) => {
				if (socketList[client] == userName) {
					error = true
				}
			})

			socket.emit('FE-error-user-exist', { error })
		})
	})

	/**
	 * Join Room
	 */
	socket.on('BE-join-room', ({ roomId, userName }) => {
		// Socket Join RoomName
		socket.join(roomId)
		socketList[socket.id] = { userName, video: true, audio: true }

		// Set User List
		io.sockets.in(roomId).clients((err, clients) => {
			try {
				const users = []
				clients.forEach((client) => {
					// Add User List
					users.push({ userId: client, info: socketList[client] })
				})
				socket.broadcast.to(roomId).emit('FE-user-join', users)
				// io.sockets.in(roomId).emit('FE-user-join', users);
			} catch (e) {
				io.sockets.in(roomId).emit('FE-error-user-exist', { err: true })
			}
		})
	})

	socket.on('BE-call-user', ({ userToCall, from, signal }) => {
		io.to(userToCall).emit('FE-receive-call', {
			signal,
			from,
			info: socketList[socket.id],
		})
	})

	socket.on('BE-accept-call', ({ signal, to }) => {
		io.to(to).emit('FE-call-accepted', {
			signal,
			answerId: socket.id,
		})
	})

	socket.on('BE-send-message', ({ roomId, msg, sender }) => {
		io.sockets.in(roomId).emit('FE-receive-message', { msg, sender })
	})

	socket.on('BE-leave-room', ({ roomId, leaver }) => {
		console.log(leaver)
		delete socketList[socket.id]
		socket.broadcast
			.to(roomId)
			.emit('FE-user-leave', { userId: socket.id, userName: [socket.id] })
		io.sockets.sockets[socket.id].leave(roomId)
	})

	socket.on('BE-toggle-camera-audio', ({ roomId, switchTarget }) => {
		if (switchTarget === 'video') {
			socketList[socket.id].video = !socketList[socket.id].video
		} else {
			socketList[socket.id].audio = !socketList[socket.id].audio
		}
		socket.broadcast
			.to(roomId)
			.emit('FE-toggle-camera', { userId: socket.id, switchTarget })
	})
})

app.listen(process.env.PORT, () => {
	console.log('Server is running ...')
})
