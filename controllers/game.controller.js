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
                game.save();
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

exports.addQuestion = async (req, res) => {
    try {
        Game.findOne({ _id: req.body.id }, (err, game) => {
            if (game) {
                game.questions.push(req.body.question);
                game.save();
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

exports.roundsAmount = async (req, res) => {
    try {
        Game.findOne({ _id: req.body.id }, (error, game) => {
            if (game) {
                const amount = game.rounds.length
                res.status(200).json({
                    success: true,
                    rounds: amount
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

exports.updateQuestion = async (req, res) => {
    try {
        Game.findOne({ _id: req.body.gameId }, (error, game) => {
            if (game) {
                console.log(game)
                console.log("req.body.question.title: " + req.body.question.title);
                console.log("game.questions: ")
                console.log(game.questions)
                game.questions.deleteOne({ title: req.body.question.title }, (error, idk) => {
                    console.log("idk");
                    console.log(idk);
                    game.questions.push(req.body.question)
                    res.save()
                })
                res.status(200).json({
                    success: true,
                    game: game.questions
                })
            }
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}


exports.questionsAmount = async (req, res) => {
    try {
        Game.findOne({ _id: req.body.id }, (error, game) => {
            if (game) {
                let amount = game.questions.length
                res.status(200).json({
                    success: true,
                    questions: amount
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
1. get number of rounds (v)
2. get amount of questions in game (v)
3. add round (v)
4. add question (v)
5. update-resave question
6. delete game
*/