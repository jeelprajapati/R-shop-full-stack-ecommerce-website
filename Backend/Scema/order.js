const mongoose = require("mongoose");
 const OrderSchema=new mongoose.Schema({
    Userid:{type:String,required:true},
    Product:[
        {
            productid:{type:String,required:true},
            desc:{type:String,required:true},
            price:{type:Number,required:true},
            quantity:{type:Number,required:true}
        }
    ],
    Address:{
            state:{type:String},
            city:{type:String}
        },
    phoneNumber:{type:Number,required:true},    
    Price:{type:Number,required:true},    
    Status:{type:String,default:'panding'}
 },{timestamps:true})

 module.exports = mongoose.model("Order",OrderSchema);