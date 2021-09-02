const express = require('express');
const { createUser } = require('../../controllers/userController');
const { permit } = require('../../middlewares/permit');
const { verifyToken } = require('../../middlewares/auth');
const Router = express.Router();

// Allow admin to use these routes
// Create user permit('admin'),
Router.route('/user').post(verifyToken, permit('admin'), createUser);
// Get all user
// Router.route('/users').get(permit, getAllUsers);
// Get, update, delete a user by id
// Router.route('/user/:userId')
// 	.get(permit, createUser)
// 	.put(permit, createUser)
// 	.delete(permit, createUser);

module.exports = Router;
