const express = require('express');
const router = express.Router();
const productsHelpers = require('../services/productsHelpers');

router.get('/', function(req, res, next) {
    console.log("Fetching all products list")
    try {
        res.json(productsHelpers.getAllProducts());
    } catch(err) {
        console.error('Error while fetching products', err.message);
        next(err);
    }
});

module.exports = router