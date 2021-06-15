const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Module extends Model {}

Module.init(
  {
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    module_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "module",
  }
);

module.exports = Module;
