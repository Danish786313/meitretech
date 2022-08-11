const { book } = require("../models")


exports.create = async (req, res) => {
    book = {
        title : req.body.title,
        authername : req.body.authername,
        ISBN : req.body.isbn
    }

    book.create(book).then(book => {
        res.status(200).json({
            sucsess: true,
            message: "book created successfully"
        })
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: "Something went wrong with book creation"
        })
    })

}
