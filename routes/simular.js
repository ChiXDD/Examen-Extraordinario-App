const express = require('express');
const router = express.Router();
const inversionController = require('../controllers/inversionController');

router.post('/', inversionController.simular);

module.exports = router;
