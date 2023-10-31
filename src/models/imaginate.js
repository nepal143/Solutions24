const mongoose = require('mongoose');

const imaginateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactDetails: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    instituteName: {
        type: String,
        required: true
    },
    instituteAddress: {
        type: String,
        required: true
    },
    yearOfStudy: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Imaginate', imaginateSchema);
