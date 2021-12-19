const Game = require("../models/Game")

exports.getAll = async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).send(games)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.create = async (req, res) => {
    try {
        await Game.create(req.body);
        res.status(200).json({
            success: true
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    };
};

exports.addRound = async (req, res) => {
    // console.log(Game.find({ _id: req.body.id }))
    console.log((req.body.round));
    try {
        await Game.find({ _id: req.body.id }).rounds.insert(req.body.round)
        console.log("found something")
        res.status(200).json({
            success: true
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
}

/*
TODO:
1. get number of rounds
2. get amount of questions in game
3. add round
4. add question
5. update-resave question
6. delete game
*/