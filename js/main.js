const formulario = document.getElementById("formulario");
const temperatura = document.getElementById("temperatura");
const mensajeError = document.getElementById("error");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const valorIngresado = temperatura.value;

  if (valorIngresado === "") {
    mensajeError.textContent = "Por favor, ingresa una temperatura.";
    return;
  }

  const celsius = parseFloat(valorIngresado);

  if (isNaN(celsius)) {
    mensajeError.textContent = "El valor ingresado no es un número. Intenta de nuevo.";
    inputTemp.value = "";
    inputTemp.focus();
    return;
  }

  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;

  resultado.textContent =
    `Grados Kelvin: ${kelvin.toFixed(2)} y Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;

  console.log("Grados Kelvin:", kelvin);
  console.log("Grados Fahrenheit:", fahrenheit);
});
