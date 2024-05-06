
const express = require('express')
const router = express.Router()

const meController = require("../app/controllers/MeController");

const upload = require("../app/middlewares/UploadImg")

router.post('/update/avatar/edit', upload.single("image"),meController.edit_avatar)
router.patch('/update/password/edit', meController.edit)
router.get('/update/avatar', meController.update_avatar)
router.get('/update/password', meController.update_password)


module.exports = router