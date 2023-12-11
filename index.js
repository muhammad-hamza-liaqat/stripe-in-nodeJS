const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Stripe = require("stripe")(
  "pk_test_51MlTROGi1bsyWjuiHy2LH6ndjmPFrqQ88iJ07A4gMpHWD1dxafeWEPCJyFg9zHmSyQOjXQeUMUAqiykWDi4KI7g100WoqWIQEp"
);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database
require("./database/connection");

// routes
const userRoutes = require("./routes/routes");
app.use("/website/productpage", userRoutes);

// set up the views
app.set("view engine", "ejs");
app.set("views", "./views")

// server
app.listen(3000, () => {
  console.log("server running at port 3000");
});
