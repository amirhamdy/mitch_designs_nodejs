const express = require('express');
const tours = require('../routes/tours');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(express.json());
    app.use('/api/tours', tours);
    app.use(error);
};