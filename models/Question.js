const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: String,
    correct: Number,
    answersArray: [{
        type: String
    }],
    type: {
        type: String,
        default: "trivia"
    },
    time: {
        type: Number,
        default: 30
    },
    picture: {
        type: String,
        default: "default"
    },
    score: {
        type: Number,
        default: 100
    }
})

module.exports = mongoose.model("Question", QuestionSchema)