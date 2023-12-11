const stripe = require("stripe")(
  "sk_test_51MlTROGi1bsyWjuiSj7FHbWeWleviRQHABHKWuzNlrB91wri7uN4hKxzAQDOhHvMd5jIg0wtl1sxV76lQnewuuh00016DsZBy4"
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
  res.render("success", { charge });
}

function handlePaymentFailure(res, errorMessage) {
  // Render the failure view with the error message
  res.render("failure", { error: errorMessage });
}
