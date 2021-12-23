const { OK } = require("../const/statusCodes");
const Game = require("../models/Game");
// const Question = require("../models/Question");
// const Round = require("../models/Round");
const Account = require("../models/Account");

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
        await Game.create()
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

// exports.addRound = async (req, res) => {
//     try {
//         Game.findOne({ _id: req.body.id }, (err, game) => {
//             if (game) {
//                 game.rounds.push(req.body.round)
//                 game.save();
//                 res.status(200).json({
//                     success: true,
//                     game: game
//                 })
//             }
//         })
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             error: err.message
//         });
//     }
// }

exports.addQuestion = async (req, res) => {
    try {
        Game.findOne({ _id: req.body.gameId }, (err, game) => {
            if (game) {
                game.questionsIds.push(req.body.questionId)
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

// exports.roundsAmount = async (req, res) => {
//     try {
//         Game.findOne({ _id: req.body.id }, (error, game) => {
//             if (game) {
//                 const amount = game.rounds.length
//                 res.status(200).json({
//                     success: true,
//                     rounds: amount
//                 })
//             }
//         })
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             error: err.message
//         });
//     }
// }

// exports.updateQuestion = async (req, res) => {
//     try {
//         Game.findOne({ _id: req.body.gameId }, (error, game) => {
//             if (game) {
//                 for (let i = 0; i < game.questions.length; i++) {
//                     if (game.questions[i]._id === req.body.question._id) {
//                         game.questions[i] = req.body.question;
//                         break;
//                     }
//                 }
//                 game.save()
//                 res.status(200).json({
//                     success: true,
//                     game: game
//                 })
//             }
//         })
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             error: err.message
//         })
//     }
// }

exports.questionsAmount = async (req, res) => {
    try {
        Game.findOne({ _id: req.body.gameId }, (error, game) => {
            if (game) {
                let amount = game.questionsIds.length
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
        await Game.deleteOne({ _id: req.body.gameId })
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

exports.getOwners = async (req, res) => {
    const accounts = await Account.find()
    accounts.forEach(account => {

    })
}