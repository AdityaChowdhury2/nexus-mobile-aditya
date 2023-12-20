const express = require('express');
const { findProducts } = require('../../api/v1/productController');
const router = express.Router();

router.get('/products', findProducts);

module.exports = router;