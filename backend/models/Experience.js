const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Experience = sequelize.define('Experience', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  company: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING, allowNull: false },
  start_date: { type: DataTypes.STRING, allowNull: false },
  end_date: { type: DataTypes.STRING, defaultValue: 'Sekarang' },
  description: { type: DataTypes.TEXT },
  is_current: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { tableName: 'experiences', timestamps: false });

module.exports = Experience;