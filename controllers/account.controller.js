const { OK, SERVER_ERR } = require("../const/statusCodes");
const Account = require("../models/Account");

exports.create = async (req, res) => {
    try {
        await Account.create(req.body);
        res.status(OK).json({
            success: true
        });
    }
    catch (err) {
        res.status(SERVER_ERR).json({
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
        await Account.deleteOne({ _id: req.body.accountId })
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

exports.updateAvatar = async (req, res) => {
    try {
        const account = await Account.findOne({ _id: req.body.accountId });
        account.avatarId = req.body.avatarId;
        account.save()
        res.status(200).json({
            success: true,
            account: account
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
        const account = await Account.findOne({ _id: req.body.accountId });
        res.send(account).status(200)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.addGame = async (req, res) => {
    try {
        const account = await Account.findOne({ _id: req.body.accountId })
        account.gamesIds.push(req.body.gameId)
        account.save()
        res.status(200).json({
            success: true,
            account: account
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}