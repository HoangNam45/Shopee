const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')
router.post('/store',siteController.store)
router.post('/login', siteController.login)
router.get('/logout', siteController.logout)
router.get('/search_product', siteController.search_product)
router.get('/search', siteController.search)
router.get('/', siteController.home)

module.exports = router