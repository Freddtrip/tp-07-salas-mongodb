// ==============================
// IMPORTACIONES
// ==============================

const { crearServicioReservas } = require("./servicios/reservas");
const { crearApp } = require("./app");
const { leerConfiguracion } = require("./config/entorno");

// ==============================
// DATOS INICIALES
// ==============================

// Son la semilla de la aplicación. Las reservas nuevas se guardan solo
// en memoria y desaparecen cuando se reinicia el servidor.
const reservas = [
  {
    id: 1,
    estudiante: "Ana",
    email: "ana@email.com",
    sala: "Sala Norte",
    fecha: "2026-09-20",
    turno: "Mañana",
    personas: 2,
  },
  {
    id: 2,
    estudiante: "Bruno",
    email: "bruno@email.com",
    sala: "Sala Sur",
    fecha: "2026-09-21",
    turno: "Tarde",
    personas: 4,
  },
  {
    id: 3,
    estudiante: "Carla",
    email: "carla@email.com",
    sala: "Sala Multimedia",
    fecha: "2026-09-22",
    turno: "Noche",
    personas: 3,
  },
  {
    id: 4,
    estudiante: "Diego",
    email: "diego@email.com",
    sala: "Sala Norte",
    fecha: "2026-09-23",
    turno: "Tarde",
    personas: 1,
  },
];

// ==============================
// ARRANQUE
// ==============================

// Lee el puerto y el formato de registro desde las variables de entorno.
// Si el puerto no es válido, lanza un error y el servidor no arranca.
const { puerto, formatoRegistro } = leerConfiguracion();

// Crea el servicio con las reservas iniciales.
// Es una sola instancia compartida por todas las rutas.
const servicioReservas = crearServicioReservas(reservas);

// Crea la aplicación de Express, todavía sin ponerla a escuchar.
const app = crearApp({ servicioReservas, formatoRegistro });

// Inicia el servidor en el puerto configurado.
app.listen(puerto, () => {
  console.log(`Servidor funcionando en http://localhost:${puerto}`);
});
