const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const authRoute = require('./src/routes/v1/authRoute');
const userRoute = require('./src/routes/v1/userRoute');
dotenv.config();

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('combined'));
}
app.use(cors());
app.use(express.json());

const { connectDB } = require('./src/configs/mongodb');
connectDB();

// Mount the route
app.use('/api/v1/', authRoute);
app.use('/api/v1/', userRoute);

// Import error handler
const { errorHandler } = require('./src/middlewares/errorHandler');

// Unhandled route
app.all('*', (req, res, next) => {
	const err = new Error('The route can not be found');
	err.statusCode = 404;
	next(err);
});
app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log('Server is running ...');
});
