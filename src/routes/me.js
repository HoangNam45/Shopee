
const express = require('express')
const router = express.Router()

const meController = require("../app/controllers/MeController");

const path = require('path')


const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/users_img")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})

router.post('/update/avatar/edit', upload.single("image"),meController.edit_avatar)
router.patch('/update/password/edit', meController.edit)
router.get('/update/avatar', meController.update_avatar)
router.get('/update/password', meController.update_password)


module.exports = router