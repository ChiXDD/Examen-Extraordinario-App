const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authMiddleware');

// Importa las rutas específicas
const index = require('./index');
const login = require('./login');
const registro = require('./registro');
const registrarUsuario = require('./registrar-usuario');
const inversiones = require('./inversiones');
const simular = require('./simular');
const dashboard = require('./dashboard');

// Configura las rutas
router.use('/', index);
router.use('/login', login);
router.use('/registro', registro);
router.use('/registrar-usuario', registrarUsuario);
router.use('/inversiones', authenticate, inversiones);
router.use('/simular', authenticate, simular);
router.use('/dashboard', authenticate, dashboard);

module.exports = router;
