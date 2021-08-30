const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());

const { connectDB } = require('./src/configs/mongodb');
connectDB();

app.get('/', (req, res) => {
	res.end('Hello world');
});

app.listen(5000, () => {
	console.log('Server is running ...');
});
