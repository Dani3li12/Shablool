const Account = require("../models/Account");

exports.create = async (req, res) => {
    try {
        await Account.create(req.body);
        res.status(200).json({
            success: true
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    };
};

exports.getAll = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.send(accounts).status(200)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    };
};

exports.delete = async (req, res) => {
    try {
        await Account.deleteOne({ _id: req.params.id })
        res.status(200).json({
            success: true
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

/*
TOOD: 
1. update avatar
2. add game
*/