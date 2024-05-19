
const express = require('express')
const router = express.Router()

const meController = require("../app/controllers/MeController");

const upload = require("../app/middlewares/UploadImg")
const new_password = require("../app/middlewares/ValidatNewpass");


router.post('/update/avatar/edit', upload.single("image"),meController.edit_avatar)
router.patch('/update/password/edit', new_password,meController.edit)
router.post('/add/product/store', meController.store_product)



router.get('/update/avatar', meController.update_avatar)
router.get('/update/password', meController.update_password)
router.get('/add/product', meController.add_product)


module.exports = router