const express = require("express")
const router = express.Router()
const games = require("../controllers/game.controller")

router.get("/", games.getAll)// Get all games 

router.post("/", games.create)

// router.post("/addRound", games.addRound)

router.post("/addQuestion", games.addQuestion)

// router.get("/roundsAmount", games.roundsAmount)

router.get("/questionsAmount", games.questionsAmount)

// router.patch("/updateQuestion", games.updateQuestion)

router.delete("/delete", games.delete)

router.get("/findOne", games.findOne)

module.exports = router