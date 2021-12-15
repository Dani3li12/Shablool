const mongoose = require("mongoose")
const Question = require("./Question")  // a question schema
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    played: {
        type: Number,
        default: 0
    },
    creatorId: String,
    questions: {
        type: [Question],
        default: null
    }
})

module.exports = mongoose.model("Game", GameSchema)