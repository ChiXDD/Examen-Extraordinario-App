const express = require('express');
const router = express.Router();
const inversionModel = require('../models/inversionModel');

router.post('/', async (req, res) => {
    try {
        console.log('Iniciando simulación en el controlador');
    
        // Extraer las propiedades del cuerpo de la solicitud
        const { tipoInversion, montoInicial, numAportaciones, montoAportaciones, plazoInversion } = req.body;
        const usuarioId = req.user.id;
    
        if (!tipoInversion || !montoInicial || !montoAportaciones || !plazoInversion || !usuarioId) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
    
        // Crear un objeto de inversión
        const inversion = {
        tipoInversion,
        montoInicial,
        numAportaciones,
        montoAportaciones,
        plazoInversion
        };
    
        // Llamar a la función simular del modelo
        const resultadoSimulacion = await inversionModel.simular(inversion, usuarioId);
        
        //Redirigir al dashboard
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error en el controlador de simulación:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
