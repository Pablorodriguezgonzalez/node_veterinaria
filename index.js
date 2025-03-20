const { registrar, leer } = require("./operaciones");

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === "registrar") {
  const [_, nombre, edad, animal, color, enfermedad] = args;
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log(
      "Debes proporcionar todos los datos: nombre, edad, tipo de animal, color y enfermedad."
    );
  } else {
    registrar(nombre, edad, animal, color, enfermedad);
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operación no válida. Usa 'registrar' o 'leer'.");
}
