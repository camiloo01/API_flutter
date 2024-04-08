const Donador = require('../models/donadorModel');

exports.obtenerTodosLosDonadores = async (req, res) => {
  try {
    const donadores = await Donador.find();
    res.json(donadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearDonador = async (req, res) => {
  try {
    const nuevoDonador = await Donador.create(req.body);
    res.status(201).json(nuevoDonador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerDonadorPorId = async (req, res) => {
  try {
    const donador = await Donador.findById(req.params.id);
    if (!donador) {
      return res.status(404).json({ error: 'Donador no encontrado' });
    }
    res.json(donador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarDonador = async (req, res) => {
  try {
    const donador = await Donador.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!donador) {
      return res.status(404).json({ error: 'Donador no encontrado' });
    }
    res.json(donador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarDonador = async (req, res) => {
  try {
    const donador = await Donador.findByIdAndDelete(req.params.id);
    if (!donador) {
      return res.status(404).json({ error: 'Donador no encontrado' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
