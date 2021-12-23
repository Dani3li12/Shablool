const mongoose = require("mongoose")
    , Schema = mongoose.Schema
    , { Round } = require(__dirname + '/Round.js').schema
    , { Question } = require(__dirname + '/Question.js').schema

const GameSchema = new Schema({
    gameName: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    questionsIds: [],
    privacy: String
})
exports.Game = mongoose.model("Game", GameSchema)