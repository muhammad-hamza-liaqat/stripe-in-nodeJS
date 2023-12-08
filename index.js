const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
require("./database/connection");

// routes
const userRoutes = require("./routes/routes");
app.use('/api', userRoutes);


// server 
app.listen(3000, ()=>{
    console.log("server running at port 3000")
});