const stripe = require("stripe")(
  "pk_test_51MlTROGi1bsyWjuiHy2LH6ndjmPFrqQ88iJ07A4gMpHWD1dxafeWEPCJyFg9zHmSyQOjXQeUMUAqiykWDi4KI7g100WoqWIQEp"
);

module.exports = {
  showPaymentForm(req, res) {
    res.render("payment-form");
  },

  async processPayment(req, res) {
    const { amount, currency, token } = req.body;

    try {
      const charge = await createCharge(amount, currency, token);
      handleSuccessfulPayment(res, charge);
    } catch (err) {
      handlePaymentFailure(res, err.message);
    }
  },
};

async function createCharge(amount, currency, token) {
  return await stripe.charges.create({
    amount,
    currency,
    source: token,
  });
}

function handleSuccessfulPayment(res, charge) {
  // Render the success view with the charge data
  res.render("payment-success", { charge });
}

function handlePaymentFailure(res, errorMessage) {
  // Render the failure view with the error message
  res.render("payment-failure", { error: errorMessage });
}