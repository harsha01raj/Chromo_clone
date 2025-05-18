const express = require("express");
const Product = require("../models/product_models");

const ProductRouter = express.Router();

ProductRouter.get("/get", async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) {
      res.status(200).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product is successfull fetched", Product: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

ProductRouter.post("/", async (req, res) => {
  try {
    const {
      productName,
      image,
      rating,
      ratingCount,
      actualPrice,
      discountPrice,
      savePrice,
      discountper,
      type,
      delivery,
    } = req.body;
    const product = Product({
      productName,
      image,
      rating,
      ratingCount,
      actualPrice,
      discountPrice,
      savePrice,
      discountper,
      type,
      delivery,
    });
    await product.save();
    res.status(400).json({ message: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = ProductRouter;
