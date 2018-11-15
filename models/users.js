module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        username: DataTypes.STRING,
        hatch: DataTypes.STRING,
        correct: DataTypes.INTEGER,
        incorrect: DataTypes.INTEGER
    });
    return Users;
}