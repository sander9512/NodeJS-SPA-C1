const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Deze model kan ook gebruikt worden voor de sluitingsdagen. Het is optioneel
// om een activity of room (zaal) in te voeren. Zo kun je bijvoorbeeld aangeven
// dat in zaal 2 basketball niet beschikbaar is. Bij een sluitingsdag laat je de
// activity en room leeg en geef je dit aan in de description.
const MaintenanceSchema = new Schema({
  hallName: {
    type: String,
    trim: true,
    required: true
  },
  city: {
    type: String,
    trim: true,
    required: true
  },
  street: {
    type: String,
    trim: true,
    required: true
  },
  houseNumber: {
    type: String,
    trim: true,
    required: true
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date,
    required: true
  },
  activity: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  room: {
    type: String,
    trim: true
  }
});

SportsHallMaintenance = mongoose.model("SportsHallMaintenance", MaintenanceSchema);
module.exports = SportsHallMaintenance;
