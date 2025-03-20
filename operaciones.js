const fs = require("fs");

const archivo = "citas.json";

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
  let citas = [];

  // Verificar si el archivo existe y leer su contenido
  if (fs.existsSync(archivo)) {
    const data = fs.readFileSync(archivo, "utf8");
    citas = data ? JSON.parse(data) : [];
  }

  // Crear el objeto de la nueva cita
  const nuevaCita = { nombre, edad, tipo: animal, color, enfermedad };
  citas.push(nuevaCita);

  // Guardar en el archivo
  fs.writeFileSync(archivo, JSON.stringify(citas, null, 2));
  console.log("Cita registrada con éxito.");
};

// Función para leer todas las citas registradas
const leer = () => {
  if (!fs.existsSync(archivo)) {
    console.log("No hay citas registradas.");
    return;
  }

  const data = fs.readFileSync(archivo, "utf8");
  const citas = data ? JSON.parse(data) : [];

  console.log("Citas registradas:");
  citas.forEach((cita, index) => {
    console.log(
      `${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Tipo: ${
        cita.tipo
      }, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`
    );
  });
};

module.exports = { registrar, leer };
