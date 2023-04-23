const Product = require("../Scema/product.js");
const router = require("express").Router();
const {verifyTokenAndAdmin, verifytoken}=require('../midleware/verifytoken.js')

//add product
  router.post('/add',verifyTokenAndAdmin,async(req,res)=>{
    const newProduct= new Product({
       title:req.body.title,
       desc:req.body.description,
       img:req.body.image,
       categories:req.body.category,
       subcat:req.body.subcategory,
       size:req.body.size,
       color:req.body.color,
       price:req.body.price,
       rating:req.body.rating
     })
    
    try {
      const savedProduct=await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json(error); 
    }
  })
//update product
router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{
  
  try {
    const findandupdate=await Product.findByIdAndUpdate(req.params.id,
      {
        $set:req.body
      }
    );
    res.status(200).json(findandupdate);
  } catch (error) {
    res.status(500).json(error); 
  }
})
//delete product

router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{
  
  try {
    const deleteProduct=await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product Delete Sucessfully");
  } catch (error) {
    res.status(401).send("unauthorized user"); 
  }
})

//get single product
router.get('/find/:id',async(req,res)=>{
  
  try {
    const findProduct=await Product.findById(req.params.id);
    res.status(200).json(findProduct);
  } catch (error) {
    res.status(500).json(error); 
  }
})
//get product by category and subcategory

router.get('/',async(req,res)=>{

  try {
    
    const mainCat=req.query.cat;
    const subCat=req.query.subcat;
    if(mainCat){
     const catPorduct=await Product.find({categories:mainCat})

       if(subCat){
          const subandcat=catPorduct.find({
            subcat:subCat}) 
          res.status(200).json(subandcat);
       }
      else{ 
      res.status(200).json(catPorduct);
      }
    }
    else if(subCat){
      const catPorduct=await Product.find({subcat:{
        $in:[subCat]
        }})
      res.status(200).json(catPorduct);      
    }
    else{
      const products=await Product.find();
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json(error)
  }

})

//trend product

router.get('/trend',async(req,res)=>{
  try {
    const sortProduct=await Product.find()
      .sort({ rating: -1 })
      .limit(4)
    res.status(200).json(sortProduct);
  } catch (error) {
    res.status(500).json(error)
  }
    
})

// find all sub category:

router.get('/subcat',async(req,res)=>{
  try {
    const query=req.query.cat;
    const subcat=req.body.subcat;
    if(query){
      const product=await Product.find({categories:query})
      const categories =new Set(product.map(product => product.subcat));
      res.json(Array.from(categories));
    }
    else if(subcat){
      const product=await Product.find({subcat:query});
      if(product){
      const mypro=await Product.find({categories:product[0].categories})
      const categories =new Set(mypro.map(product => product.subcat));
      res.json(Array.from(categories));
      }
    }
    else{
      const product=await Product.find();
      const categories =new Set(product.map(product => product.subcat));
      res.json(Array.from(categories));
    }
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;