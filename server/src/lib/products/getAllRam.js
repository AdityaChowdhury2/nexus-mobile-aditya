const Product = require("../../models/Products")

const getAllRam = async () => {
    const ramValues = await Product.find({ memory: { $ne: 0 } }).distinct('memory').sort();
    return ramValues
}
module.exports = getAllRam