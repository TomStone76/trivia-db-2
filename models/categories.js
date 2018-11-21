module.exports = function(sequelize, DataTypes) {
    var Categories = sequelize.define("Questions", {
        math: data_types.STRING,
        science: data_types.STRING,
        history: data_types.STRING,
        world_wonders: data.types.STRING,
        geogrpahy: data.types.STRING
    });
}