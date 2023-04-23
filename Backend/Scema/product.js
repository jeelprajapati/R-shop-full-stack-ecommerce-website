const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: String },
    subcat: { type: String,required:true},
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    rating:{type:Number,required: true,default:5}
  },{timestamps:true}
);

module.exports = mongoose.model("Product", ProductSchema);
