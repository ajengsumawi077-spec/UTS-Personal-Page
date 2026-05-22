const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const { category } = req.query;
    const where = category && category !== 'All' ? { category } : {};
    const projects = await Project.findAll({ where, order: [['id', 'DESC']] });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};