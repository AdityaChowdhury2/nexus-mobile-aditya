const Product = require("../../models/Products")

const getAllOs = async () => {
    const osValues = await Product.distinct('os').collation({ locale: 'en' }).sort({ os: 1 });
    return osValues
}
module.exports = getAllOs