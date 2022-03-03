"use strict";
/* eslint-env node, es6 */

const { readFile } = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(readFile);

const READ_OPTIONS = { encoding: "UTF-8" };
const INDEX_URL =
  "C:/Users/fares/OneDrive/Bureau/backend-node-express/index.html";

module.exports = async () => {
  // operation
  // get file content
  const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS);
  // return HTML page
  return contenu;
};
