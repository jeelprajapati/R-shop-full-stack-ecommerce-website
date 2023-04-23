const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require('mongoose');
dotenv.config();
const cors=require("cors");
const port=process.env.PORT;
const mongodb=process.env.MONGO_URL;

//dependancy
app.use(express.json());
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions)); 
app.use(express.urlencoded({extended:false}));

//request

app.get('/',(req,res)=>{res.send("hello from server side");})
app.use('/auth',require("./routes/authroute.js"));
app.use('/product',require("./routes/productroute.js"));
app.use('/order',require("./routes/orderroute.js"));
app.use('/message',require("./routes/messageroute.js"));

//mongo connect
mongoose.connect(mongodb, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  //listen app
app.listen(port,()=>{
    console.log(`server start at port number ${port}`)
})