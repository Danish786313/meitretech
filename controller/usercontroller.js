const { user } = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.signup = async (req, res) => {
    userdata = {
        email : req.body.email,
        username : req.body.username,
        password : req.body.password,
        DOB : req.body.dob
    }
    user.findAll({where : {email : req.body.email, password : req.body.password}}).then(user => {
        if(user){
            res.status(200).json({
                success : true,
                message: 'useralready exists'
            })
        }else{
            bcrypt.genSalt(10, salt, (err, data) => {
                bcrypt.hash(req.body.password, salt, (err, data) => {
                    userdata = {
                        email : req.body.email,
                        username : req.body.username,
                        password : hash,
                        DOB : req.body.dob
                    }
                    user.create(post).then(res => {
                        res.status(200).json({
                            success: true,
                            message: "User created successfully",
                        }).catch(err => {
                            res.status(500).json({
                                success: false,
                                message: "Error creating user",
                            })
                        })
                    })
                })
            })
        }
    }) 
}

exports.login = async (req, res) => {
    user.findOne({where: {email: req.body.email}}).then(user => {
        if(!user){
            res.status(401).json({
                success: false,
                message: "User does not exist",
            })
        }else{
            jwt.compare(req.body.password, user.password, (err, data) => {
                if(err) throw err
                else jwt.sign({
                    email: user.email,
                    password: user.password
                }, process.env.secret, (err, token) => {
                    if(err) throw err
                    else return res.status(200).json({
                        success: true,
                        message: "Login successful",
                        Token: token
                    })
                })
            })
        }
    })
}