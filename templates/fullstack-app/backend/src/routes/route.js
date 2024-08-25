const express = require('express');
const router = express.Router();
const getExample = require('../controllers/controller');

// Example route
router.get('/hello', getExample);

module.exports = router;

