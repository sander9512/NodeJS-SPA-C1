const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sluitingsdag voor de sportsHall

const SportsHallClosedSchema = new Schema({
  sportsHallId: {
    type: Number,
    required: true
  },
        date: {
        type: Date,
        required: true
    },
  // 11/20/2014 04:11 - formaat
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
    allDay: {
        type: Boolean,
        required: true
    },
  description: {
    type: String,
    required: true
  }
});

SportsHallClosed = mongoose.model("SportsHallClosed", SportsHallClosedSchema);
module.exports = SportsHallClosed;
