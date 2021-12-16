const express = require("express")
const router = express.Router()
const accounts = require("../controllers/account.controller");

router.get("/", accounts.getAll); // Get all accounts

router.post("/", accounts.create);

// router.get("/:id", (req, res) => {
//     accounts.findOne
// });

// router.patch("/:id", (req, res) => {
//     accounts.update
// });

router.delete("/:id", accounts.delete);

module.exports = router