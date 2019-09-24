"use strict";

require("dotenv").config();

const ENV_VARS = ["DB_NAME", "DB_USERNAME", "DB_PASSWORD"];

module.exports = {
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,

  // Preferred port
  port: process.env.PORT || 3000,

  checkEnvVariables: () => {
    ENV_VARS.forEach(key => {
      if (!process.env[key]) {
        console.log("WARNING: Missing the environment variable " + key);
      } else {
        // Check that urls use https
        if (["APP_URL", "SHOP_URL"].includes(key)) {
          const url = process.env[key];
          if (!url.startsWith("https://")) {
            console.log(
              "WARNING: Your " + key + ' does not begin with "https://"'
            );
          }
        }
      }
    });
  }
};
