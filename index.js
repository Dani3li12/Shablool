const express = require("express")
const mongoose = require("mongoose") // new
const routes = require("./routes") // new
const PORT = 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/shablooldb";

// Connect to MongoDB database
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        const app = express()
        app.use(express.json())
        require("./routes")(app);

        app.listen(PORT, () => {
            console.log("Server has started!")
        })
    })