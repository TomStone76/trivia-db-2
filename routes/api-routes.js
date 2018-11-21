var db = require("../models/index");

module.exports = function (app) {

    app.get("/api/questions", function (req, res) {
        db.Questions.findAll({})
            .then(function (dbQuestion) {
                res.json(dbQuestion);
            })
    });

    app.get("/api/users", function (req, res) {
        db.Users.findAll({})
            .then(function (dbUser) {
                res.json(dbUser);
            })
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