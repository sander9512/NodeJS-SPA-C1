const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkdaySchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    date: {
        type: Date,
        required: true
    }
});

Workday = mongoose.model("Workday", WorkdaySchema);
module.exports = Workday;