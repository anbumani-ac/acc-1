const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookedDatesSchema = new Schema({
  date: {
    type: String,
    required: true
  }
});

const bookedDates = mongoose.model("bookedDate", bookedDatesSchema);

module.exports = bookedDates;
