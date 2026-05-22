const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Profile = sequelize.define('Profile', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  headline: { type: DataTypes.STRING, allowNull: false },
  bio: { type: DataTypes.TEXT, allowNull: false },
  photo_url: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  cv_url: { type: DataTypes.STRING },
  github_url: { type: DataTypes.STRING },
  linkedin_url: { type: DataTypes.STRING },
  instagram_url: { type: DataTypes.STRING },
}, { tableName: 'profile', timestamps: false });

module.exports = Profile;