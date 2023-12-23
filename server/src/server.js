const express = require('express');
const globalErrorHandler = require('./utils/globalErrorHandler/globalErrorHandler');
const productRouter = require('./routes/productRouter');
const applyMiddleware = require('./middlewares/applymiddleware');


const app = express();

applyMiddleware(app);

app.use(productRouter);

app.get('/', (req, res) => {
    res.send("Running...");
})

//handle all unhandled routes
app.all('*', (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
})

app.use(globalErrorHandler)

module.exports = app;