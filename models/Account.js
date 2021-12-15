const mongoose = require("mongoose")
const Game = require("./Game")

const schema = mongoose.Schema({
    personalId: String,
    avatarId: String,
    games: [{
        type: Game,
        default: null
    }]
})

module.exports = mongoose.model("Account", schema)