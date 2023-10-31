const mongoose = require('mongoose');

const movieMakingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    contactDetails: {
        type: String,
        required: true
    },
    totalMembers: {
        type: Number,
        required: true,
        min: 2
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
    institutePinCode: {
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

module.exports = mongoose.model('MovieMaking', movieMakingSchema);
