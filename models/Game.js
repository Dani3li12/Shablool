const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const { Play } = require(__dirname + '/Game.js').schema;


const { Question } = require(__dirname + '/Question.js').schema;

const GameSchema = new Schema({
    name: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    played: {
        type: [Play],
        default: null
    },
    creatorId: String,
    questions: {
        type: [Question],
        default: null
    }
})
module.exports = mongoose.model("Game", GameSchema)