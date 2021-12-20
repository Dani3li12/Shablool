const mongoose = require("mongoose")
    , Schema = mongoose.Schema

const RoundSchema = new Schema({
    playedDate: Date,
    students: [{
        name: String,
        grade: Number
    }]
})

module.exports = mongoose.model("Round", RoundSchema)   