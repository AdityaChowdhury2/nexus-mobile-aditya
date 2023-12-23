const Product = require("../../models/Products")

const getProduct = async (filter) => {
    const cursor = await Product.find(filter)
    return cursor
}

module.exports = getProduct