const Round = require("../models/Round");

exports.create = async (req, res) => {
    try {
        await Round.create(req.body);
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

exports.getAll = async (req, res) => {
    try {
        const rounds = await Round.find();
        res.status(200).send(rounds)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}