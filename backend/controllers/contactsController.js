const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({ order: [['created_at', 'DESC']] });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Nama, email, dan pesan wajib diisi.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Format email tidak valid.' });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: 'Pesan berhasil dikirim!', data: contact });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};