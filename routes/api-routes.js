var db = require("../models/index");

module.exports = function (app) {

    app.get("/api/questions", function (req, res) {
        db.Questions.findAll({})
            .then(function (dbQuestion) {
                res.json(dbQuestion)
            })
    });

    app.get("/api/users/:id", function (req, res) {
        db.Users.findOne({
            where: {
                id: req.params.id
            }
        });
    });
    app.put("/api/correct", function (req, res) {
        db.Users.update(req.body, {
            where: {
                id: req.body.id,
                correct: req.body.correct
            }
        })
    });
    app.put("/api/incorrect", function (req, res) {
        db.Users.update(req.body, {
            where: {
                id: req.body.id,
                incorrect: req.body.incorrect
            }
        });
    });
};