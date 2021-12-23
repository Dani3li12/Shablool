const mongoose = require("mongoose")
    , Schema = mongoose.Schema

const RoundSchema = new Schema({
    playedDate: Date,
    students: [{
        name: String,
        grade: Number
    }],
    gameId: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("Round", RoundSchema)   