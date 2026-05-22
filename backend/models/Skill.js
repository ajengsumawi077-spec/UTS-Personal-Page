const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Skill = sequelize.define('Skill', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  icon: { type: DataTypes.STRING },
  level: { type: DataTypes.INTEGER, defaultValue: 80 },
}, { tableName: 'skills', timestamps: false });

module.exports = Skill;