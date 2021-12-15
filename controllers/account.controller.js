const Account = require("../models/Account")

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
        await Account.find();
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

exports.delete = async (req, res) => {
    try {
        await Account.deleteOne({ _id: req.body.id })
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