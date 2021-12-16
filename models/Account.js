const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const Game = require("./Game") // the problem is here
// const Game = mongoose.model("Game") // the problem is here
const { Game } = require(__dirname + '/Game.js').schema;

const AccountSchema = new Schema({
    personalId: String,
    avatarId: String,
    games: {
        type: [Game],
        default: null
    }
});

module.exports = mongoose.model("Account", AccountSchema)
