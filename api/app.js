// api/index.js
const serverless = require("serverless-http");
const app = require("../server"); // correct path
module.exports = serverless(app);
