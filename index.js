const express = require("express")
const mongoose = require("mongoose") // new
const routes = require("./routes") // new

// Connect to MongoDB database
mongoose
    .connect("mongodb://127.0.0.1:27017/shablooldb", { useNewUrlParser: true })
    .then(() => {
        const app = express()
        app.use(express.json())
        require("./routes")(app);

        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })