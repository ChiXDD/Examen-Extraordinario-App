const axios = require('axios');

exports.simular = async (inversion, usuarioId) => {
    console.log("Realizando solicitud a la API para simular");
    const response = await axios.post('http://localhost:3002/inversiones/simular', {inversion, usuarioId});
    return response.data;
};
