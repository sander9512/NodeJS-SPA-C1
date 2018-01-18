const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// sportsHallId van de oude app, type is het onderhoudstype, bijvoorbeeld
// zaal 2, object is het werkelijke object dat onderhoud nodig heeft, startTime
// en endTime moeten in het aangegeven formaat, description is omschrijving van
// het onderhoud.
const MaintenanceSchema = new Schema({
  sportsHallId: {
    type: Number,
    required: true
  },
  maintenanceType: {
    type: String,
    required: true
  },
  maintenanceObject: {
    type: String,
    required: true
  },
    date: {
        type: Date,
        required: true
    },
  // 11/20/2014 04:11 - formaat
  startTime: {

    type: String,
  },
  endTime: {
    type: String,
  },
  description: {
    type: String,
    required: true
  }
});

SportsHallMaintenance = mongoose.model("SportsHallMaintenance", MaintenanceSchema);
module.exports = SportsHallMaintenance;
