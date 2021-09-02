const express = require('express');
const {
	createUser,
	getAllUsers,
	getUser,
	updateUser,
	deleteUser,
} = require('../../controllers/userController');
const { permit } = require('../../middlewares/permit');
const { verifyToken } = require('../../middlewares/auth');
const Router = express.Router();

// Allow admin to use these routes

Router.route('/users')
	.post(verifyToken, permit('admin'), createUser)
	.get(verifyToken, permit('admin'), getAllUsers);

Router.route('/users/:id')
	.get(verifyToken, permit('admin'), getUser)
	.put(verifyToken, permit('admin'), updateUser)
	.delete(verifyToken, permit('admin'), deleteUser);

module.exports = Router;
