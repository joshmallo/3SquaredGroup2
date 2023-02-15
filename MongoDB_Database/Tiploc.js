const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tiplocSchema = new Schema({
    Name:
     {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tiploc', tiplocSchema);
