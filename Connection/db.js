const mongoose = require('mongoose')
const connectionString = process.env.DB_CONNECTION

mongoose.connect(connectionString).then(
    (res)=>{
        console.log("GwG Server successfully connected with MongoDB Atlas");
    }
).catch((err)=>{
    console.log(err);
})

