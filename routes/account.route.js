const express = require("express")
const router = express.Router()
const accounts = require("../controllers/account.controller");

// Get all accounts
router.get("/", accounts.getAll);

router.post("/", accounts.create);

router.get("/:id", accounts.findOne);

router.patch("/:id", accounts.update);

router.delete("/:id", questions.delete);

module.exports = router