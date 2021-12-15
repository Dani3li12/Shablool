const mongoose = require("mongoose")

const schema = mongoose.Schema({
    gameId: String,
    playedDate: Date,
    students: {
        studentId: String,
        grade: Number
    }
})

module.exports = mongoose.model("Play", schema)