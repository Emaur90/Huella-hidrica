// script.js - Calculadora de Huella Hídrica

function calcularHuella() {
  const ducha = parseFloat(document.getElementById("ducha").value) || 0;
  const lavadora = parseFloat(document.getElementById("lavadora").value) || 0;
  const carne = parseFloat(document.getElementById("carne").value) || 0;
  const lacteos = parseFloat(document.getElementById("lacteos").value) || 0;
  const camisetas = parseFloat(document.getElementById("camisetas").value) || 0;

  // Factores de consumo aproximados en litros
  const aguaDucha = ducha * 9 * 365; // 9 litros por minuto
  const aguaLavadora = lavadora * 70 * 52; // 70 litros por uso
  const aguaCarne = carne * 15400 * 52; // 15,400 litros por ración semanal
  const aguaLacteos = lacteos * 1000 * 52; // 1,000 litros por ración semanal
  const aguaCamisetas = camisetas * 2700 * 12; // 2,700 litros por camiseta al mes

  const total = aguaDucha + aguaLavadora + aguaCarne + aguaLacteos + aguaCamisetas;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <h3>Tu huella hídrica estimada es:</h3>
    <p><strong>${Math.round(total).toLocaleString()} litros/año</strong></p>
    <p>⭐ Consejo: Reducir el consumo de carne y optimizar el uso del agua en casa puede disminuir significativamente tu huella hídrica.</p>
  `;
}
