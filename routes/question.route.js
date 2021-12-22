const express = require("express")
const router = express.Router()
const questions = require("../controllers/question.controller")

router.get("/", questions.getAll)// Get all questions

router.post("/", questions.create)

router.get("/", questions.findOne)

router.patch("/", questions.update)

router.delete("/", questions.delete)

module.exports = router