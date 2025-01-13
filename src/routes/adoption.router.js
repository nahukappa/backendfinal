// src/routes/adoption.router.js
const express = require('express');
const router = express.Router();

// Simulación de adopciones
let adoptions = [
    { id: 1, pet: 'Dog', adopter: 'John Doe' },
    { id: 2, pet: 'Cat', adopter: 'Jane Smith' }
];

// Endpoint para obtener todas las adopciones
router.get('/adoptions', (req, res) => {
    res.status(200).json(adoptions);
});

// Endpoint para obtener una adopción por ID
router.get('/adoptions/:id', (req, res) => {
    const adoption = adoptions.find(a => a.id === parseInt(req.params.id));
    if (!adoption) return res.status(404).send('Adoption not found');
    res.status(200).json(adoption);
});

// Endpoint para agregar una nueva adopción
router.post('/adoptions', (req, res) => {
    const { pet, adopter } = req.body;
    const newAdoption = { id: adoptions.length + 1, pet, adopter };
    adoptions.push(newAdoption);
    res.status(201).json(newAdoption);
});

module.exports = router;
