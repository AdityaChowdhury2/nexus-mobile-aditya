const getProduct = require("../../../lib/products/getProducts");

const findProducts = async (req, res, next) => {
    try {
        const result = await getProduct();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = { findProducts }