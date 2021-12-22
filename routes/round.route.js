const express = require("express")
const router = express.Router()
const rounds = require("../controllers/round.controller")

router.get("/", rounds.getAll)// Get all questions

router.post("/", rounds.create)

router.get("/getAverage", rounds.getAverage)

router.patch("/sortByGrades", rounds.sortByGrades)

router.get("/findOne", rounds.findOne)

module.exports = router