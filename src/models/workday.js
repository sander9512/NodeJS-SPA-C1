const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkdaySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
});

Workday = mongoose.model("Workday", WorkdaySchema);
module.exports = Workday;
