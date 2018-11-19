var db = require("../models/index");

module.exports = function (app) {

    app.get("/api/questions", function (req, res) {
        db.Questions.findAll({})
            .then(function (dbQuestion) {
                res.json(dbQuestion)
            })
    });

    app.get("/api/users/:user_id", function (req, res) {
        db.Users.findOne({
            where: {
                id: req.params.user_id
            }
        });
    });
    app.put("/api/correct", function (req, res) {
        db.Users.update(req.body, {
            where: {
                id: req.body.user_id,
                correct: req.body.correct
            }
        })
    });
    app.put("/api/incorrect", function (req, res) {
        db.Users.update(req.body, {
            where: {
                id: req.body.user_id,
                incorrect: req.body.incorrect
            }
        });
    });
};