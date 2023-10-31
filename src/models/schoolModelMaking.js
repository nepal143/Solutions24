const mongoose = require('mongoose');

const schoolModelMakingSchema = new mongoose.Schema({
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
    schoolName: {
        type: String,
        required: true
    },
    schoolAddress: {
        type: String,
        required: true
    },
    schoolPinCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SchoolModelMaking', schoolModelMakingSchema);
