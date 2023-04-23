const mongoose = require("mongoose");
 const MessageSchema=new mongoose.Schema({
    Userid:{type:String,required:true},
    message:{type:String,required:true}
 },{timestamps:true})

 module.exports = mongoose.model("Message",MessageSchema);