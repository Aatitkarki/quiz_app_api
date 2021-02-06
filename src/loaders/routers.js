const app = require("express").Router();
app.use(require("../modules/test/test_routes"));

module.exports = app;