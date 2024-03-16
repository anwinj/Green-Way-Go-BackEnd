require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./Connection/db')

const GwGServer = express()

GwGServer.use(cors())
GwGServer.use(express.json())
GwGServer.use(router)

const PORT = 3000 || process.env.PORT

GwGServer.listen(PORT,()=>{
    console.log(`GwG Server started at PORT: ${PORT}`);
})

GwGServer.get('/',(req,res)=>{
    res.send('<h1>GwG Server started.... waiting for Client requests!!!<h1>')
})