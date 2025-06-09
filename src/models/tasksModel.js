const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Tasks = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING(20),
      allowNull: true,
      validate: {
        isIn: [["Baixa", "Média", "Alta"]],
      },
    },
  },
  {
    tableName: "tasks",
    timestamps: false, // No createdAt or updatedAt columns
  }
);

module.exports = Tasks;
