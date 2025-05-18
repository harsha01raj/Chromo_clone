const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    productName:String,
    image:String,
    rating:String,
    ratingCount:Number,
    actualPrice:Number,
    discountPrice:Number,
    savePrice:Number,
    discountper:String,
    type:String,
    delivery:String,
})

const Product=mongoose.model("Product",productSchema);

module.exports=Product