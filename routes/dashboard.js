const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('dashboard', { title: `Dashboard`, user: req.user != null ? `${req.user.nombre}` : '' });
});

module.exports = router;