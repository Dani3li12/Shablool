const express = require("express")
const router = express.Router()
const accounts = require("../controllers/account.controller")

router.get("/", accounts.getAll) // Get all accounts

router.post("/", accounts.create)

router.patch("/updateAvatar", accounts.updateAvatar)

router.delete("/", accounts.delete)

router.get("/findOne", accounts.findOne)

router.post("/addGame", accounts.addGame)

module.exports = router