const express = require('express');
const router = express.Router({});
const mfaRoute = require('./mfaRoute');

router.use('/mfa', mfaRoute);

module.exports = router;

