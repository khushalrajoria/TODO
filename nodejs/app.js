const express = require("express");
const body_parser = require("body-parser");
const userRoute = require("./routes/user_route");

const app = express();
app.use(body_parser.json()); // Ensure this is before your routes
app.use('/', userRoute);

module.exports = app;
