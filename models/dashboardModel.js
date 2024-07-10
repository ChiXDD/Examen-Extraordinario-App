const axios = require('axios');

async function obtenerInversionesHistoricas(usuarioId) {
  const response = await axios.get(`${process.env.BASE_URL}/dashboards/historicas/${usuarioId}`);
  return response.data;
}

async function obtenerInversionesAjustadas(usuarioId) {
  const response = await axios.get(`${process.env.BASE_URL}/dashboards/ajustadas/${usuarioId}`);
  return response.data;
}

async function obtenerInversionesMontecarlo(usuarioId) {
  const response = await axios.get(`${process.env.BASE_URL}/dashboards/montecarlo/${usuarioId}`);
  return response.data;
}

async function obtenerResultadosPeriodicos(simulacionId, tipoSimulacion, usuarioId) {
  const response = await axios.get(`${process.env.BASE_URL}/dashboards/resultados/${simulacionId}/${tipoSimulacion}/${usuarioId}`);
  return response.data;
}

module.exports = {
  obtenerInversionesHistoricas,
  obtenerInversionesAjustadas,
  obtenerInversionesMontecarlo,
  obtenerResultadosPeriodicos
};
