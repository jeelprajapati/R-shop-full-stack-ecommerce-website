const express=require("express");
const route=express.Router();
const CryptoJS = require("crypto-js");
const jwt=require('jsonwebtoken');
const User = require("../Scema/auth.js");
const dotenv=require('dotenv');
const{verifyadmin}=require('../midleware/verifyadmin.js');
dotenv.config();
//register
  route.post('/register',async(req,res)=>{
        const encryptpass=CryptoJS.AES.encrypt(await req.body.password,process.env.SECRETKEY).toString();
        const newUser=await new User({
        username:req.body.username,
        email:req.body.email,
        password: encryptpass,
        isAdmin:req.isAdmin
    });
    try {
      const savedUser = await newUser.save();
      const accessToken=jwt.sign({
        id:savedUser._id,
        isAdmin:savedUser.isAdmin
      },process.env.JWT_SEC,
         {expiresIn:"3d"}
      ) 
      res.status(201).json({isadmin:savedUser.isAdmin,accessToken});
    } catch (error) {
      console.log(error);
    }
  })

//login
route.post('/login', async (req, res) => {
  try{
      const user = await User.findOne(
          {
             username:req.body.username
          }
          
      );
      
       !user && res.status(401).json("Wrong User Name");
       
      const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
          process.env.SECRETKEY
      );
      
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      const inputPassword =await req.body.password;
    
      originalPassword != inputPassword && 
          res.status(401).json("Wrong Password");
        
  const accessToken = jwt.sign(
      {
          id: user._id,
          isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
          {expiresIn:"3d"}
      );

      const { password, ...others } =user._doc;  
      res.status(200).json({...others, accessToken});

  }catch(err){
      res.status(500).json(err);
  }
});
//get allusers

route.get('/alluser',async(req,res)=>{
  try {
    const users= await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
})

//find by month


module.exports=route;