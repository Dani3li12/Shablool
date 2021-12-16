const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// const Question = require("./Question")  // a question schema ' this is also a problem
// const Question = mongoose.model("Question")  // a question schema ' this is also a problem
const { Question } = require(__dirname + '/Question.js').schema;

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