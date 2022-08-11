const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const { sequelize } = require("sequelize")
const port = process.env.port || 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const userapi = require("./routes/userroute")
const productapi = require("./routes/productruote")

app.use("/user", userapi)
app.use("/product", productapi)

app.listen(port, async () => {
    await sequelize.sync()
    console.log(`server is listning on {port}`)
})

