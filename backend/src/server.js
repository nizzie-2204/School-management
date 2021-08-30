const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
	res.end('Hello world');
});

app.listen(5000, () => {
	console.log('Server is running ...');
});
