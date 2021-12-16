const express = require("express")
const router = express.Router()
const questions = require("../controllers/question.controller")

router.get("/", questions.getAll);// Get all questions

router.post("/", questions.create);

router.get("/:id", questions.findOne);

router.patch("/:id", questions.update);

router.delete("/:id", questions.delete);

module.exports = router