"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const config = require("./config");
const i18n = require("./i18n.config");
const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(i18n.init);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

// Check if all environment variables are set
config.checkEnvVariables();

const listener = app.listen(config.port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
