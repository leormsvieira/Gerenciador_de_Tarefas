const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TaskCategories = sequelize.define(
  "task_categories",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    task_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "task_categories",
    timestamps: false, // No createdAt or updatedAt columns
  }
);

module.exports = TaskCategories;
