const mongoose = require('mongoose');

const bgmiSchema = new mongoose.Schema({
    teamLeaderName: {
        type: String,
        required: true
    },
    teamLeaderGameName: {
        type: String,
        required: true
    },
    teamLeaderGameId: {
        type: String,
        required: true
    },
    player2Name: {
        type: String,
        required: true
    },
    player2GameName: {
        type: String,
        required: true
    },
    player2GameId: {
        type: String,
        required: true
    },
    player3Name: {
        type: String,
        required: true
    },
    player3GameName: {
        type: String,
        required: true
    },
    player3GameId: {
        type: String,
        required: true
    },
    player4Name: {
        type: String,
        required: true
    },
    player4GameName: {
        type: String,
        required: true
    },
    player4GameId: {
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

module.exports = mongoose.model('BGMI', bgmiSchema);
