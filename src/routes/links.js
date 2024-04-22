const express = require('express')
const router = express.Router()
const { pool, client } = require("../database.js")

// pool --> pool.query
// client --> client.execute

router.get('/', async (req, res) => {
    try {
        const empleados = await client.execute(`SELECT * FROM empleados INNER JOIN departamentos ON empleados.departamento_id = departamentos.departamento_id;`)
        res.render('./vistas/inicio', { empleados: empleados.rows })
    } catch (error) {
        console.error('Error al consultar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});


router.get('/timezone/employ', async (req, res) => {
    try {
        const empleadosAll = await client.execute(`SELECT * FROM empleados LEFT JOIN departamentos ON empleados.empleado_id = departamentos.departamento_id;`)
        res.render('./vistas/empleadosAll', { empleadosAll: empleadosAll.rows })
    } catch (error) {
        console.error('Error al consultar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/timezone/employnot', async (req, res) => {
    try {
        const empleadosnot = await client.execute(`SELECT * FROM empleados WHERE departamento_id IS NUll;`)
        res.render('./vistas/empleadosnot', { empleadosnot: empleadosnot.rows })
    } catch (error) {
        console.error('Error al consultar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/timezone/employed', async (req, res) => {
    try {
        const empleadosF = await client.execute(`SELECT * FROM empleados INNER JOIN departamentos ON empleados.empleado_id = departamentos.departamento_id;    `)
        res.render('./vistas/empleadosF', { empleadosF: empleadosF.rows })
    } catch (error) {
        console.error('Error al consultar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;