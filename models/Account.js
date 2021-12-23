const mongoose = require("mongoose")
const Schema = mongoose.Schema

const { Game } = require(__dirname + '/Game.js').schema;

const AccountSchema = new Schema({
    personalId: String,
    avatarId: {
        type: String,
        default: "default"
    },
    gamesIds: []
});

module.exports = mongoose.model("Account", AccountSchema)