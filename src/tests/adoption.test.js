// src/tests/adoption.test.js
const request = require('supertest');
const express = require('express');
const adoptionRouter = require('../routes/adoption.router');

const app = express();
app.use(express.json());
app.use('/api', adoptionRouter);

describe('Adoption API', () => {
    it('should return all adoptions', async () => {
        const response = await request(app).get('/api/adoptions');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return a single adoption by ID', async () => {
        const response = await request(app).get('/api/adoptions/1');
        expect(response.status).toBe(200);
        expect(response.body.pet).toBe('Dog');
    });

    it('should return 404 if adoption not found', async () => {
        const response = await request(app).get('/api/adoptions/999');
        expect(response.status).toBe(404);
    });

    it('should create a new adoption', async () => {
        const newAdoption = { pet: 'Rabbit', adopter: 'Alice Cooper' };
        const response = await request(app).post('/api/adoptions').send(newAdoption);
        expect(response.status).toBe(201);
        expect(response.body.pet).toBe(newAdoption.pet);
    });
});
