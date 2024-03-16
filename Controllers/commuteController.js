const commutes = require('../Models/commuteModel')

exports.addCommute = async (req,res)=>{
    const {date,commuteMethod,kilometers} = req.body
    const userId = req.payload
    try{
        if(commuteMethod === 'Walking' || commuteMethod === 'Cycling'){
            points = Number(kilometers) * 2
        }
        else if(commuteMethod === 'Electric car'){
            points = Number(kilometers) * 0.5
        }
        else{
            points = Number(kilometers) * 0.25
        }
    
        const newCommute = new commutes({
            date, commuteMethod, kilometers, points, userId
        })
        await newCommute.save()
        res.status(200).json(newCommute)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getAllUserCommute = async (req,res)=>{
    const userId = req.payload
    try{
        const allCommutes = await commutes.find({userId})
        res.status(200).json(allCommutes)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteCommute = async (req,res)=>{
    const {id} = req.params
    try{
        const delCommute = await commutes.findByIdAndDelete({_id:id})
        res.status(200).json("Commute deleted")
    }
    catch(err){
        res.status(401).json(err)
    }
}
