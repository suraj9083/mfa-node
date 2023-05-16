const express = require('express');
const mfaRoute = express.Router({});
const { mfaController } = require("../controllers/index");

mfaRoute.get('/qr', mfaController.qr);
mfaRoute.post('/verify', mfaController.verify);

module.exports = mfaRoute;