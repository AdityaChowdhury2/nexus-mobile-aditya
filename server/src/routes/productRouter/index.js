const express = require('express');
const { findProducts, findAllOS, findAllRam, findAllBrand } = require('../../api/v1/productController');
const router = express.Router();

router.get('/products', findProducts);

router.get('/products/get-os', findAllOS);
router.get('/products/get-ram', findAllRam);
router.get('/products/get-brand', findAllBrand);

module.exports = router;