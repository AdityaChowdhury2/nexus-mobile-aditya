const Product = require("../../models/Products")

const getAllBrands = async () => {
    const brands = await Product.distinct('brand').collation({ locale: 'en' }).sort();
    return brands
}
module.exports = getAllBrands