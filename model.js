const { default: mongoose } = require("mongoose");




const reviewSchema = new mongoose.Schema({
    name: String,
    review: String
  });
  
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    status: String,
    brand: String,
    category: String,
    image: String,
    key_features: [String],
    description: String,
    rating: Number,
    reviews: [reviewSchema]
  });

const ProductModel =  mongoose.model("Products", productSchema);
module.exports = ProductModel;

