module.exports = app => {
    app.use("/api/questions", require("./question.route"));
    app.use("/api/games", require("./game.route"));
    app.use("/api/accounts", require("./account.route"));
};