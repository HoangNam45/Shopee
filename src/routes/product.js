const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductController')
router.get('/:slug', productController.product_info)

module.exports = router