const express=require("express");
const route=express.Router();
const { verifytoken,verifyTokenAndAdmin }=require('../midleware/verifytoken.js');
const message=require('../Scema/message.js');

route.post('/send',verifytoken,async(req,res)=>{
    try {
    const userid=req.user.id;
    const newMessage=new message({
        Userid:userid,
        message:req.body.message
    })
        const saveMessage=await newMessage.save();
        res.status(200).send("send message successfully");
    } catch (error) {
        res.status(401).send("Unautorized user")
    }
})

//delete message

route.delete('/delete/:id',async(req,res)=>{
  try {
      const deleteMessage=await message.findByIdAndDelete({_id:req.params.id})
      res.status(200).send("message deleted sucessfully"); 
  } catch (error) {
    res.json(error);
  }  
})

//get message

route.get('/lastmessage',verifyTokenAndAdmin,async(req,res)=>{
    try {
      const findMessage=await message.find()
      .sort({ createdAt: -1 });
      res.status(200).json(findMessage);
    } catch (error) {
        res.json(error);
    }
})

module.exports=route;