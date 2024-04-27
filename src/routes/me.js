
const express = require('express')
const router = express.Router()

const meController = require("../app/controllers/MeController");

router.get('/update/password', meController.update)
router.patch('/update/password/edit', meController.edit)


module.exports = router