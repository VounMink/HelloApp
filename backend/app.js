const { Pool } = require('pg');
const express = require('express');
const BP = require('body-parser');

const app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'prototype_of_the_employee_and_equipment_accounting_system',
    password: 'LG_001',
    port: 5432
});

let jsonParser = BP.json();

app.use('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTOPNS, POST, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.get('/staff', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM staff;');
        res.send(result.rows);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});
app.post('/staff', jsonParser, async (req, res) => {
    const { FCs, office } = req.body;
    
    try {
        const result = await pool.query(`INSERT INTO staff (FCs, office) VALUES ('${FCs}', ${office});`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.put('/staff', async (req, res) => {
    const { id, FCs, office } = req.body;
    try {
        const result = await pool.query(`UPDATE staff SET FCs = '${FCs}', office = ${office} WHERE id = ${id};`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.delete('/staff', async (req, res) => {
    const { id } = req.body;
    try {
        const result = await pool.query(`DELETE FROM staff WHERE id = ${id};`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/technic', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM technic;');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post('/technic', jsonParser, async (req, res) => {
    const { name, type } = req.body;
    try {
        const result = await pool.query(`INSERT INTO technic (name, type) VALUES ('${name}', '${type}');`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.put('/technic', async (req, res) => {
    const { id, name, type } = req.body;
    try {
        const result = await pool.query(`UPDATE technic SET name = '${name}', type = '${type}' WHERE id = ${id};`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.delete('/technic', async (req, res) => {
    const { id } = req.body;
    try {
        const result = await pool.query(`DELETE FROM technic WHERE id = ${id};`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/type_of_equipment', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM type_of_equipment;');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post('/type_of_equipment', jsonParser, async (req, res) => {
    const { name } = req.body;
    try {
        const result = await pool.query(`INSERT INTO type_of_equipment (name) VALUES ('${name}');`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.put('/type_of_equipment', async (req, res) => {
    const { id, name } = req.body;
    try {
        const result = await pool.query(`UPDATE type_of_equipment SET name = '${name}' WHERE id = ${id};`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.delete('/type_of_equipment', async (req, res) => {
    const { id } = req.body;
    try {
        const result = await pool.query(`DELETE FROM type_of_equipment WHERE id = ${id};`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/employee_equipment', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM employee_equipment;');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post('/employee_equipment', jsonParser, async (req, res) => {
    const { FCs, office, technic } = req.body;
    try {
        const result = await pool.query(`INSERT INTO employee_equipment (FCs, office, technic) VALUES ('${FCs}', '${office}', '${technic}');`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.put('/employee_equipment', async (req, res) => {
    const { id, FCs, office, technic } = req.body;
    try {
        const result = await pool.query(`UPDATE employee_equipment SET FCs = '${FCs}', office = ${office}, technic = '${technic}' WHERE id = ${id};`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.delete('/employee_equipment', async (req, res) => {
    const { id } = req.body;
    try {
        const result = await pool.query(`DELETE FROM employee_equipment WHERE id = ${id};`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Сервер успешно запущен!');
});