const express = require('express')
const { Router } = require("express")
const { loginController, signUpController, logoutController } = require('../controllers/auth.controller')

const router = Router()

router.post('/login', loginController)
router.post('/signup', signUpController)
router.post('/logout', logoutController)

module.exports = router