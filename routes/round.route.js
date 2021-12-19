const express = require("express")
const router = express.Router()
const rounds = require("../controllers/round.controller")

router.get("/", rounds.getAll)// Get all questions

router.post("/", rounds.create)

module.exports = router