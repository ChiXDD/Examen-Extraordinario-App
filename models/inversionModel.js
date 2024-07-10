const axios = require('axios');

exports.simular = async (inversion, usuarioId) => {
    console.log("Realizando solicitud a la API para simular");
    const response = await axios.post(`${process.env.BASE_URL}/inversiones/simular`, {inversion, usuarioId});
    return response.data;
};