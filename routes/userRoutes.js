const express = require('express');
const { createUser, getUsers, getUserById, editUser, deleteUser, login, getUserVerify, updatePassword } = require('../controllers/user.controller')
const auth = require('../middleware/auth')

const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)
    .get(getUsers)
 

userRouter.route('/user/:id')
    .delete(deleteUser)
    .get(getUserById)
 
userRouter.route('/user/signin')
    .post(login)
    .put(updatePassword)

userRouter.route('/user/verifyUser')
    .get(auth, getUserVerify)

userRouter.route('/user/myProfile')
    .put(auth, editUser)

userRouter.get('/:_id', auth, 'getUserById')

module.exports = userRouter;