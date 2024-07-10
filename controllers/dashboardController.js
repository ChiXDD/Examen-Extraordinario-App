const {
  obtenerInversionesHistoricas,
  obtenerInversionesAjustadas,
  obtenerInversionesMontecarlo,
  obtenerResultadosPeriodicos,
} = require("../models/dashboardModel");

async function obtenerInversiones(usuarioId) {
  const inversionesHistoricas = await obtenerInversionesHistoricas(usuarioId);
  const inversionesAjustadas = await obtenerInversionesAjustadas(usuarioId);
  const inversionesMonteCarlo = await obtenerInversionesMontecarlo(usuarioId);

  const inversiones = [
    ...inversionesHistoricas.map((inv) => ({ ...inv, tipo: "historico" })),
    ...inversionesAjustadas.map((inv) => ({ ...inv, tipo: "ajustado" })),
    ...inversionesMonteCarlo.map((inv) => ({ ...inv, tipo: "montecarlo" })),
  ];

  return inversiones;
}

async function obtenerResultados(simulacionId, tipoSimulacion, usuarioId, periodo, resultado) {
  return await obtenerResultadosPeriodicos(
    simulacionId,
    tipoSimulacion,
    usuarioId,
    periodo,
    resultado
  );
}

module.exports = {
  obtenerInversiones,
  obtenerResultados,
};
