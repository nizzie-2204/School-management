const express = require('express');
const { login } = require('../../controllers/authController');

const Router = express.Router();

Router.route('/login').post(login);

module.exports = Router;
