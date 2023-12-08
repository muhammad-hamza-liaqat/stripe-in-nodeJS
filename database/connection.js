const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.connection)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database not connected");
  });

module.exports = mongoose