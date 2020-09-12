const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  msisdn: {
    type: String,
    required: true,
  },
  born_in: {
    type: Number,
  },
  ZIP_CODE: {
    type: String,
  },
  sex: {
    type: String,
  },
  age: {
    type: Number,
  },
  PARTNER_MSISDN: {
    type: Number,
  },
  sum_uploaddata: {
    type: Number,
  },
  mon_pos: {
    type: Number,
  },
  mon_neg: {
    type: Number,
  },
  sum_re: {
    type: Number,
  },
  trade_re: {
    type: Number,
  },
  trade_lo: {
    type: Number,
  },
  trade_ser: {
    type: Number,
  },
  label: {
    type: Number,
  },
});

const User = mongoose.model("users", UsersSchema);
module.exports = User;
