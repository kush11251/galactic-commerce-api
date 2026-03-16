const express = require('express');
const router = express.Router();
router.post('/', async (req, res) => {
    try {
        const order = req.body;
        // process order
        res.json({ message: 'Order processed successfully' });
    } catch (error) {
        console.error('Error processing order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports = router;