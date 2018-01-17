const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkdaySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userId: {
        type: String,
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
