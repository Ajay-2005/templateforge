const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/controller');

// Example route
router.get('/example', exampleController.getExample);

module.exports = router;
