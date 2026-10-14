const { salasPermitidas } = require("../middleware/reservas");

function crearControladorReservas(servicioReservas) {
  function listar(req, res) {
    res.render("reservas/lista", {
      titulo: "Reservas",
      reservas: servicioReservas.listar(),
    });
  }

  function mostrarFormulario(req, res) {
    res.render("reservas/nueva", {
      titulo: "Nueva reserva",
      salasPermitidas: salasPermitidas,
    });
  }

  function mostrarDetalle(req, res) {
    const id = Number(req.params.id);

    const reserva = servicioReservas.obtenerPorId(id);

    if (!reserva) {
      return res.status(404).render("no-encontrado", {
        titulo: "Reserva no encontrada",
      });
    }

    res.render("reservas/detalle", {
      titulo: "Detalle de reserva",
      reserva: reserva,
    });
  }

  function crear(req, res) {
    servicioReservas.crear(req.reservaValidada);

    res.redirect("/reservas");
  }

  function estado(req, res) {
    res.json({
      servicio: "activo",
      cantidadReservas: servicioReservas.contar(),
      solicitudId: res.locals.solicitudId,
    });
  }

  return { listar, mostrarFormulario, mostrarDetalle, crear, estado };
}

module.exports = { crearControladorReservas };
