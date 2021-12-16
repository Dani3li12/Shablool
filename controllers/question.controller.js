/**
 * Post - body
 * client - axios.post(url, data);
 * req.body.title
 * 
 * Query - url
 * url....?title=nave&correct=false
 * req.query.title
 * 
 * Params - url
 * url.../:id 
 * req.params.id;
 */

const Question = require("../models/Question")

exports.create = async (req, res) => {
    try {
        await Question.create(req.body);
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

exports.findOne = async (req, res) => {
    try {
        const question = await Question.findOne({ _id: req.body.id })
        res.status(200).send(question)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    };
};

exports.delete = async (req, res) => {
    try {
        await Question.deleteOne({ _id: req.body.id })
        res.status(200).json({
            success: true,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    };
};

exports.update = async (req, res) => {  // update operation into a single record
    try {
        const question = await Question.findOne({ _id: req.body.id })
        await question.update(req.body)
        res.status(200).json({
            success: false,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const questions = await Question.find();
        res.send(questions).status(200);
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}