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
    try {
        Game.findOne({ _id: req.body.id }, (err, game) => {
            if (game) {
                game.rounds.push(req.body.round);


                res.status(200).json({
                    success: true,
                    game: game
                })
            }
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