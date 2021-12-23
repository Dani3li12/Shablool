const { OK } = require("../const/statusCodes");
const Game = require("../models/Game");
const Question = require("../models/Question");
const Round = require("../models/Round");

exports.getAll = async (req, res) => {
    try {
        const games = await Game.find()
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
        const gameOptions = {
            gameName: req.body.gameName,
            adminIds: [req.body.userId]
        }
        await Game.create(gameOptions)
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
                game.rounds.push(req.body.round)
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
                game.questions.push(req.body.question)
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
                for (let i = 0; i < game.questions.length; i++) {
                    if (game.questions[i]._id === req.body.question._id) {
                        game.questions[i] = req.body.question;
                        break;
                    }
                }
                game.save()
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
        })
    }
}


exports.questionsAmount = async (req, res) => {
    try {
        // const { gameId } = req.query;
        // const questions = await Question.find({ gameId: gameId });
        // res.status(200).json({
        //     success: true,
        //     questions: questions.length
        // });

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

exports.delete = async (req, res) => {
    try {
        await Game.deleteOne({ _id: req.body.id })
        res.status(200).json({
            success: true,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.findOne = async (req, res) => {
    try {
        // TODO: get all questions and rounds and add them to game object
        const game = await Game.findOne({ _id: req.body.id })

        const questions = await Question.find({ gameId: req.body.id });
        game.questions = questions;

        const rounds = await Round.find({ gameId: gameId });
        game.rounds = rounds;
        // res.send(game).status(200)

        res.status(OK).json({
            success: true,
            game: game
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}
/*
TODO:
1.
*/