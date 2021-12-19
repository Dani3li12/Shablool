const express = require("express")
const router = express.Router()
const games = require("../controllers/game.controller")

router.get("/", games.getAll)// Get all games 

router.post("/", games.create)

router.post("/addRound", games.addRound)


// router.get("/:id", (req, res) => {
//     games.findOne
// });

// router.patch("/:id", (req, res) => {
//     games.update
// });

// router.delete("/:id", (req, res) => {
//     games.delete
// });

module.exports = router