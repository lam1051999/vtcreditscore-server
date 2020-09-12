const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("./env.json");
const cors = require("cors");

const app = express();

mongoose.connect(env.MONGODB);
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());
app.use(require("./routes"));

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 5000, function () {
  console.log("now listening port:" + process.env.PORT);
});
