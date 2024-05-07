const express = require('express')
const router = express.Router()

const valid_reg = require("../app/middlewares/ValidateRegister")
const valid_log = require("../app/middlewares/ValidateLogin")

const siteController = require('../app/controllers/SiteController')
router.post('/store', valid_reg,siteController.store)
router.post('/login', valid_log, siteController.login)
router.get('/logout', siteController.logout)
router.get('/', siteController.home)

module.exports = router