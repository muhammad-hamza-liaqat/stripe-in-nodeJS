// routes/index.js
const express = require('express');
const router = express.Router();
const showPaymentForm = require('../controller/paymentController');

router.get('/payment', showPaymentForm.showPaymentForm);
router.post('/payment', showPaymentForm.processPayment);

module.exports = router;
