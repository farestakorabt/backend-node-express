"use strict";
/* eslint-env node, es6 */

// import express
const express = require("express");

// create PORT
const PORT = 6300;

// create express appli
const app = express();

// import homepage logic
const generateHomepage = require("./pages/index-get.js");

// listen GET method & route '/'
app.get("/", async (req, res) => {
  const indexHtml = await generateHomepage();

  res.send(indexHtml);
});

// add other routes for css & images
app.use(
  "/styles",
  express.static("C:/Users/fares/OneDrive/Bureau/backend-node-express/styles/")
);
app.use("/images", express.static("C:/Users/fares/OneDrive/Bureau/backend-node-express/images/"));

// start server & listen to the PORT (6300)
app.listen(PORT, () => {
  console.log(`Server started : http://localhost:${PORT}`);
});
