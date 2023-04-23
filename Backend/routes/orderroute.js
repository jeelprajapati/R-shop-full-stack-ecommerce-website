const express=require("express");
const route=express.Router();
const dotenv=require('dotenv');
const order=require('../Scema/order');
const{ verifytoken,verifyTokenAndAdmin }=require('../midleware/verifytoken.js');
const { verifyadmin }=require('../midleware/verifyadmin.js');
dotenv.config();

// create order

route.post('/create',verifytoken,async(req,res)=>{   
     const newOrder=new order({Userid:req.user.id,...req.body});
     try {
        const saveOrder=await newOrder.save();   
        res.status(200).json(saveOrder);
     } catch (error) {
        console.log(error);
     }
})

//update order

route.put('/:id',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const updateOrder=await order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        
        res.status(200).json(updateOrder);
    } catch (error) {
        console.log(error);
    }
})

//Delete order

route.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const deleteorder=await order.findByIdAndDelete(req.params.id);
        res.send('Order deleted sucessfully');
    } catch (error) {
        console.log(error);
    }
})

//get all order

route.get('/',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const orders=await order.find();
        res.status(200).json(orders); 
    } catch (error) {
        console.log(error);
    }
})

//get order by userid

// route.get('/:userId',verifyTokenAndAdmin,async(req,res)=>{
//   try {
//       const userOrder= await order.find({
//           Userid:req.params.userId
//       })
//       res.status(200).json(userOrder);
//     
//   } catch (error) {
//      console.log(error);
//   }  
// })

//Get income

route.get('/income', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
      const income = await order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$Price",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports=route;