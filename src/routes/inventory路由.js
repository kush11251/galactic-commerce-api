const express = require('express');
const router = express.Router();
const Product = require('../models/product');
router.get('/', async (req, res) => {
    try {
        const products = [];
        // fetch products from database
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports = router;