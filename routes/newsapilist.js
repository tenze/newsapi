const express = require('express');
const router = express.Router();
const { findTechNews } = require('../services/newsapi.js')

router.get('/', findTechNews, (req, res) => {
  res.json(res.news || [])
});

module.exports = router;
