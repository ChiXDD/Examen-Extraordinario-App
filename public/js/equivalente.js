console.log("Script cargado en el navegador");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded disparado");
  const tipoInversion = document.getElementById("tipoInversion");
  const montoInicial = document.getElementById("montoInicial");
  const valorEquivalente = document.getElementById("valorEquivalente");

  async function obtenerValorEquivalente(tipo, monto) {
    try {
      let url = "";
      let equivalente = 0;

      if (tipo === "bitcoin" || tipo === "ethereum" || tipo === "tether") {
        url = `https://api.coingecko.com/api/v3/simple/price?ids=${tipo}&vs_currencies=mxn`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos);
        equivalente = monto / datos[tipo].mxn;
      } else if (tipo === "oro" || tipo === "plata") {
        const tipoMetal = tipo === "oro" ? "XAU" : "XAG";
        url = `https://www.metals-api.com/api/latest?access_key=e2233l22w6f09wmurl1dxaq3l9818ett1l8wddo8w04cipaji7l735dpocwj&base=MXN&symbols=${tipoMetal}`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos);
        equivalente = monto / datos.rates[tipoMetal];
      }

      return equivalente;
    } catch (error) {
      console.error("Error al obtener el valor equivalente:", error);
      return 0;
    }
  }

  async function actualizarValorEquivalente() {
    console.log("Evento disparado");
    const tipo = tipoInversion.value;
    const monto = parseFloat(montoInicial.value);

    if (
      monto > 0 &&
      (tipo === "bitcoin" ||
        tipo === "ethereum" ||
        tipo === "tether" ||
        tipo === "oro" ||
        tipo === "plata")
    ) {
      const equivalente = await obtenerValorEquivalente(tipo, monto);
      valorEquivalente.value = equivalente.toFixed(4);
    } else {
      valorEquivalente.value = montoInicial.value;
    }
  }

  tipoInversion.addEventListener("change", actualizarValorEquivalente);
  montoInicial.addEventListener("input", actualizarValorEquivalente);
});
