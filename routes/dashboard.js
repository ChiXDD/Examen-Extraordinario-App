const express = require('express');
const router = express.Router();
const { obtenerInversiones, obtenerResultados } = require('../controllers/dashboardController');

// Ruta para renderizar el dashboard
router.get('/', async (req, res) => {
  const usuarioId = req.user.id; // Asumimos que el ID del usuario está disponible en req.user
  try {
    const inversiones = await obtenerInversiones(usuarioId);
    res.render('dashboard', { inversiones, usuarioId });
  } catch (error) {
    console.error('Error al cargar el dashboard:', error);
    res.status(500).send('Error al cargar el dashboard');
  }
});

// Ruta para obtener resultados periódicos
router.get('/resultados/:simulacionId/:tipoSimulacion', async (req, res) => {
  const { simulacionId, tipoSimulacion } = req.params;
  const usuarioId = req.user.id;
  try {
    const resultados = await obtenerResultados(simulacionId, tipoSimulacion, usuarioId);
    res.json(resultados);
  } catch (error) {
    console.error('Error al obtener resultados periódicos:', error);
    res.status(500).send('Error al obtener resultados periódicos');
  }
});

module.exports = router;
