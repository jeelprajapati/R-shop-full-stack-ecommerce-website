const dotenv=require("dotenv");
dotenv.config();

const verifyadmin=async(req,res,next)=>{
    const username=await req.body.username;
    const password= await req.body.password;
    const orgadmin=process.env.ADMIN_USERNAME
    const orgpass=process.env.ADMIN_PASS
    if(username!=orgadmin||password!=orgpass){
        console.log('false',username,password,orgadmin,orgpass)
        req.isAdmin=false
        next()
    }
    else{
        console.log('true')
        req.isAdmin=true
        next()
    }
}

module.exports={
    verifyadmin
}