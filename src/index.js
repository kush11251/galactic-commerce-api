const express = require('express');
const app = express();
const port = 3000;
const db = require('./database/db');
const inventoryRouter = require('./routes/inventory路由');
const ordersRouter = require('./routes/orders路由');
app.use('/inventory', inventoryRouter);
app.use('/orders', ordersRouter);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});