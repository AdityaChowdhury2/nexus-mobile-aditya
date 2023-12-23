const getAllBrands = require("../../../lib/products/getAllBrand");
const getAllOs = require("../../../lib/products/getAllOS");
const getAllRam = require("../../../lib/products/getAllRam");
const getProduct = require("../../../lib/products/getProducts");

const findProducts = async (req, res, next) => {
    try {
        const query = req.query
        console.log(query);
        const filter = {};
        if (query?.minPrice && query?.maxPrice) {
            const minPrice = Number(query.minPrice)
            const maxPrice = Number(query.maxPrice)
            filter.price = {
                $gte: minPrice,
                $lte: maxPrice
            }
        }
        if (query?.ram) {
            if (Array.isArray(query?.ram)) {
                let numberArray = query.ram.map(Number)
                filter.memory = {
                    $in: numberArray
                }
            }
            else {
                filter.memory =
                    Number(query.ram)
            }
        }
        console.log(filter);
        const result = await getProduct(filter);
        // console.log(result);
        res.send(result);
    } catch (error) {
        next(error);
    }
}

const findAllOS = async (req, res, next) => {
    try {
        const result = await getAllOs();
        res.send(result);
    } catch (error) {
        next(error);
    }
}
const findAllRam = async (req, res, next) => {
    try {
        const result = await getAllRam();
        res.send(result);
    } catch (error) {
        next(error);
    }
}
const findAllBrand = async (req, res, next) => {
    try {
        const result = await getAllBrands();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = { findProducts, findAllOS, findAllRam, findAllBrand }