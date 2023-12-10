const express = require('express');
const functionME = require('../controller/routesController');
const router = express.Router();



router.route('/product').get(functionME)


module.exports = router