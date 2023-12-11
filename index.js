const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
console.log("Stripe Secret Key:", "sk_test_51MlTROGi1bsyWjuiSj7FHbWeWleviRQHABHKWuzNlrB91wri7uN4hKxzAQDOhHvMd5jIg0wtl1sxV76lQnewuuh00016DsZBy4");

const Stripe = require("stripe")(
  "sk_test_51MlTROGi1bsyWjuiSj7FHbWeWleviRQHABHKWuzNlrB91wri7uN4hKxzAQDOhHvMd5jIg0wtl1sxV76lQnewuuh00016DsZBy4"
);


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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
