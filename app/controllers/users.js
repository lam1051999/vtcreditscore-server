const User = require("../models/users");

exports.getUserById = function (req, res, next) {
  let { msisdn } = req.params;
  User.find({ msisdn })
    .then((users) => {
      res.send({
        status: true,
        data: users,
      });
    })
    .catch((err) => res.send(err));
};

exports.getListUsers = function (req, res, next) {
  const { page, limit } = req.query;
  let parsePage = parseInt(page);
  let parseLimit = parseInt(limit);
  let skip = (parsePage - 1) * parseLimit;
  User.find({})
    .skip(skip)
    .limit(parseLimit)
    .then((users) => {
      res.send({
        status: true,
        data: users,
      });
    })
    .catch((err) => res.send(err));
};

exports.testServer = function (req, res, next) {
  res.send("Server is up and running");
};
