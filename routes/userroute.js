const express = require("express")
const router = express.Router()

const controller = require("../controller/usercontroller")

router.post("/signUp", controller.signup)

router.post("/signIn", controller.login)

module.export = router