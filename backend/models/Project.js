const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Project = sequelize.define('Project', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  image_url: { type: DataTypes.STRING },
  tech_stack: { type: DataTypes.STRING },
  demo_url: { type: DataTypes.STRING },
  github_url: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING, defaultValue: 'Web' },
}, { tableName: 'projects', timestamps: false });

module.exports = Project;