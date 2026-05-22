const Experience = require('../models/Experience');

exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll({ order: [['id', 'DESC']] });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};