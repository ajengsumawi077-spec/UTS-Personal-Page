const express = require('express');
const router = express.Router();
const { getExperiences } = require('../controllers/experiencesController');

router.get('/', getExperiences);

module.exports = router;