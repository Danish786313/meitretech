const express = require("express")
const router = express.Router()

const controller = require("../controller/productcontroller")
const middleware = require("../middleware/auth")

router.post("/add", controller.create)

module.export = router