const Reservas = require('../models/spa.js');

// Verificar disponibilidad de la fecha y hora
exports.verificarDisponibilidad = async (req, res) => {
  const { date, time } = req.body;
  try {
    const reservacionExistente = await Reservas.findOne({ date, time });
    if (reservacionExistente) {
      return res.json({ disponible: false });
    }
    return res.json({ disponible: true });
  } catch (error) {
    console.error('Error al verificar la disponibilidad', error); 
    return res.status(500).json({ error: 'Error al verificar la disponibilidad' });
  }
};

// Crear nueva reservación
exports.crearReservacion = async (req, res) => {
  const { date, time, service, clientName, clientEmail } = req.body;
  
  try {
    // Contar cuántas reservas existen para asignar el turno
    const totalReservas = await Reservas.countDocuments({});
    const turno = totalReservas + 1; // El turno será el siguiente número

    const nuevaReservacion = new Reservas({
      date,
      time,
      service,
      clientName,
      clientEmail,
      turno 
    });

    await nuevaReservacion.save();
    return res.status(201).json({ 
      msg: 'Reservación creada exitosamente', 
      turno: turno, 
      date, 
      time, 
      service, 
      clientName 
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear la reservación' });
  }
};


//Realizar búsqueda
exports.buscarReservacion = async (req, res) => {
  const turno = req.params.turno;
  try {
      const reservacion = await Reservas.findOne({ turno: turno });
      if (!reservacion) {
          return res.status(404).json({ message: 'Turno no encontrado' });
      }
      return res.json(reservacion);
  } catch (error) {
      return res.status(500).json({ error: 'Error al buscar la reservación' });
  }
};

exports.modificarReservacion = async (req, res) => {
    const turno = req.params.turno; 
    const { date, time, service, clientName, clientEmail } = req.body;

    try {
        const turnoNumber = Number(turno);

        // Validar disponibilidad de fecha y hora 
        const reservacionExistente = await Reservas.findOne({ date, time, turno: { $ne: turnoNumber } });
        if (reservacionExistente) {
            return res.status(400).json({ message: 'Fecha y hora no disponibles' });
        }

        // Actualizar reservación
        const reservacion = await Reservas.findOneAndUpdate(
            { turno: turnoNumber }, 
            { date, time, service, clientName, clientEmail },
            { new: true }
        );

        if (!reservacion) {
            return res.status(404).json({ message: 'Reservación no encontrada' });
        }

        return res.json({ message: 'Reservación modificada exitosamente', reservacion });
    } catch (error) {
        console.error('Error al modificar la reservación:', error);
        return res.status(500).json({ error: 'Error al modificar la reservación' });
    }
};



//Eliminar reservación
exports.eliminarReservacion = async (req, res) => {
  const turno = req.params.turno;

  try {
      const reservacion = await Reservas.findOneAndDelete({ turno: turno });
      if (!reservacion) {
          return res.status(404).json({ message: 'Reservación no encontrada' });
      }
      return res.json({ message: 'Reservación eliminada exitosamente' });
  } catch (error) {
      console.error('Error al eliminar la reservación:', error);
      return res.status(500).json({ error: 'Error al eliminar la reservación' });
  }
};





