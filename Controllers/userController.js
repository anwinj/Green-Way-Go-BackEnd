const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')

// logic for register
exports.register = async (req,res)=>{
    const {username,email,password} = req.body
    // console.log('Inside register request');
    // console.log(username,email,password);
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User already exists!!! Please Login...")
        }
        else{
            const newUser = new users({
                username,email,password,profile:"",location:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// logic for login
exports.login = async (req,res)=>{
    const {email,password} = req.body
    // console.log("Inside Login");
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
            res.status(200).json({token,existingUser})
        }
        else{
            res.status(404).json("Invalid email / password")
        }
    }catch(err){
        res.status(401).json(err)
    }  
}

// get user details
exports.getUserDetails = async (req,res)=>{
    const userId = req.payload
    try{
        const loggedUser = await users.findOne({_id:userId})
        if(loggedUser){
            res.status(200).json(loggedUser)
        }
        else{
            res.status(404).json("Issue with login info")
        }
    }catch(err){
        res.status(401).json(err)
    }
}