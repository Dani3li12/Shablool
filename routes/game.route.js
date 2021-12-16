const express = require("express")
const router = express.Router()
const games = require("../controllers/game.controller")

router.get("/", games.getAll)// Get all games 

router.post("/", games.create)

// router.get("/:id", (req, res) => {
//     games.findOne
// });

// router.patch("/:id", (req, res) => {
//     games.update
// });

// router.delete("/:id", (req, res) => {
//     games.delete
// });

// TODO:
// 1. get amount it played
// 2. get amount of questions in game
// 3. 

module.exports = router