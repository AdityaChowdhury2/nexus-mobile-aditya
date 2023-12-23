const cors = require('cors');
const express = require('express');
const { CLIENT, LOCAL_CLIENT } = require('../config/default');

const applyMiddleware = (app) => {
    app.use(cors(
        {
            origin: [LOCAL_CLIENT, CLIENT],
            credentials: true
        },
    ));
    app.use(express.json());
}

module.exports = applyMiddleware