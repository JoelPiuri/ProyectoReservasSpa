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
    console.error('Error al verificar la disponibilidad', error); // Añade este log para ver el error exacto
    return res.status(500).json({ error: 'Error al verificar la disponibilidad' });
  }
};

// Crear nueva reservación
exports.crearReservacion = async (req, res) => {
  const { date, time, service, clientName, clientEmail } = req.body;
  // Validar que el email tenga un formato general válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(clientEmail)) {
    return res.status(400).json({ error: 'Por favor, ingresa un correo electrónico válido.' });
  }
  // Validar que la fecha no sea anterior a la fecha actual
  const inputDate = new Date(date);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  // Comprobar si la fecha de reserva es anterior a la fecha actual
  if (inputDate < currentDate) {
    return res.status(400).json({ error: 'No se pueden hacer reservaciones en una fecha anterior a la actual.' });
  }
  try {
    // Contar cuántas reservas existen para asignar el turno
    const totalReservas = await Reservas.countDocuments({});
    const turno = totalReservas + 1; // El turno será el siguiente número

    // Generar el código único
    const codigo = `${clientName.slice(0, 2).toUpperCase()}${time.replace(':', '')}${turno}`;

    const nuevaReservacion = new Reservas({
      date,
      time,
      service,
      clientName,
      clientEmail,
      turno, // Guarda el turno en la base de datos
      codigo
    });

    await nuevaReservacion.save();
    return res.status(201).json({ 
      msg: 'Reservación creada exitosamente', 
      turno: turno, 
      date, 
      time, 
      service, 
      clientName,
      codigo
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear la reservación' });
  }
};


//Realizar búsqueda
exports.buscarReservacion = async (req, res) => {
  const codigo = req.params.codigo; // Asegúrate de que 'codigo' es el nombre correcto del parámetro
  
  try {
      const reservacion = await Reservas.findOne({ codigo: codigo });
      if (!reservacion) {
          return res.status(404).json({ message: 'Reservación no encontrada' });
      }
      return res.json(reservacion);
  } catch (error) {
      return res.status(500).json({ error: 'Error al buscar la reservación' });
  }
};


// Modificar reservación
exports.modificarReservacion = async (req, res) => {
    const codigo = req.params.codigo;
    const { date, time, service, clientName, clientEmail } = req.body;
    // Validar que el email tenga un formato general válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail)) {
      return res.status(400).json({ error: 'Por favor, ingresa un correo electrónico válido.' });
    }
    // Validar que la fecha no sea anterior a la fecha actual
    const inputDate = new Date(date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Comprobar si la fecha de reserva es anterior a la fecha actual
    if (inputDate < currentDate) {
      return res.status(400).json({ error: 'No se pueden hacer reservaciones en una fecha anterior a la actual.' });
    }
    try {
        console.log('Código recibido para modificación:', codigo); // Agregar logs para depurar
        console.log('Datos recibidos:', req.body);

        // Actualizar reservación
        const reservacion = await Reservas.findOneAndUpdate(
            { codigo: codigo }, 
            { date, time, service, clientName, clientEmail },
            { new: true }
        );

        if (!reservacion) {
            console.log('Reservación no encontrada con el código:', codigo);
            return res.status(404).json({ message: 'Reservación no encontrada' });
        }

        console.log('Reservación modificada:', reservacion);
        return res.json({ message: 'Reservación modificada exitosamente', reservacion });
    } catch (error) {
        console.error('Error al modificar la reservación:', error);
        return res.status(500).json({ error: 'Error al modificar la reservación' });
    }
};

// Eliminar reservación
exports.eliminarReservacion = async (req, res) => {
    const codigo = req.params.codigo;

    try {
        console.log('Código recibido para eliminación:', codigo); // Agregar logs para depurar

        const reservacion = await Reservas.findOneAndDelete({ codigo: codigo });

        if (!reservacion) {
            console.log('Reservación no encontrada con el código:', codigo);
            return res.status(404).json({ message: 'Reservación no encontrada' });
        }

        console.log('Reservación eliminada:', reservacion);
        return res.json({ message: 'Reservación eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar la reservación:', error);
        return res.status(500).json({ error: 'Error al eliminar la reservación' });
    }
};






