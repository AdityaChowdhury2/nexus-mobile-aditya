const Product = require("../../models/Products")

const getProduct = async () => {
    const cursor = await Product.find()
    return cursor
}

module.exports = getProduct