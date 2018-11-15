module.exports = function(sequelize, DataTypes) {
    var Questions = sequelize.define("questions", {
        question_text: DataTypes.STRING,
        answer_key: DataTypes.BOOLEAN
    });
    return Questions;
}