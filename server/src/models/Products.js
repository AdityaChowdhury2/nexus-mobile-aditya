const { model, Schema } = require('mongoose');

const ProductSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    type: String,
    processor: String,
    memory: Number,
    os: String,
    thumbnail: String,
})

const Product = model('Product', ProductSchema);

module.exports = Product;