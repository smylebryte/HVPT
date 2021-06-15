const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Contrast extends Model {}

Contrast.init(
  {
    contrast_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    contrast_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "contrast",
  }
);

module.exports = Contrast;
