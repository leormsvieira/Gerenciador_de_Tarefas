const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: false, // No createdAt or updatedAt columns
  }
);

module.exports = Users;
