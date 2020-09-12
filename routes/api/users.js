const express = require("express");
const app = express.Router();
const controller = require("../../app/controllers/users");

app.route("/users/:msisdn").get(controller.getUserById);
app.route("/users").get(controller.getListUsers);

module.exports = app;
