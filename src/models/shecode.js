const mongoose = require("mongoose")
const sheCodeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    hackerRankId: {
      type: String,
      required: true
    },
    codeforcesId: {
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

module.exports = mongoose.model("shecode",sheCodeSchema)
 