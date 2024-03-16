const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const commuteController = require('../Controllers/commuteController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

// route for register
router.post('/register',userController.register)

// route for login
router.post('/login',userController.login)

// route for get user details
router.get('/get-user',jwtMiddleware,userController.getUserDetails)

//route for add commute
router.post('/add-commute',jwtMiddleware,commuteController.addCommute)  

//route for get all user commute
router.get('/get-commute',jwtMiddleware,commuteController.getAllUserCommute) 

// route for delete commute
router.delete('/delete-commute/:id',jwtMiddleware,commuteController.deleteCommute)

module.exports = router