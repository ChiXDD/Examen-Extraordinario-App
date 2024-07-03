const express = require('express');
const router = express.Router();
const inversionController = require('../controllers/inversionController');

router.get('/', (req, res) => {
    res.render('inversiones', { title: `Nueva Inversión`, user: req.user != null ? `${req.user.nombre}` : '' });
});

module.exports = router;