// routes/index.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/payment', paymentController.showPaymentForm);
router.post('/payment', paymentController.processPayment);

module.exports = router;
