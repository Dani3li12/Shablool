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

exports.getAverage = async (req, res) => {
    try {
        let average = 0;
        Round.findOne({ _id: req.body.id }, (error, round) => {
            for (let i = 0; i < round.students.length; i++) {
                average += round.students[i].grade;
            }
            average /= 3
            res.status(200).send(average.toString())
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

//sort function by grades from heigher to lower    
function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return 1;
        } else if (a[prop] > b[prop]) {
            return -1;
        }
        return 0;
    }
}

exports.sortByGrades = async (req, res) => {
    try {
        Round.findOne({ _id: req.body.id }, (error, round) => {
            round.students.sort(GetSortOrder("grade"))
            round.save()
            res.status(200).json({
                success: true,
                round: round
            })
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
        const round = await Round.findOne({ _id: req.body.id })
        res.send(round).status(200)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}