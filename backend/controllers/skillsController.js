const Skill = require('../models/Skill');

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll({ order: [['category', 'ASC'], ['name', 'ASC']] });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};