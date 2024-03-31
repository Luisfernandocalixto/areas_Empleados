const express = require('express')
const router = express.Router()
const pool = require("../database.js")

// router.get('/', async (req, res) => {
//     try {
//         const empleados = await pool.query(`SELECT * FROM empleados INNER JOIN departamentos ON empleados.e_id = departamentos.d_id;    `)
//         res.render('./vistas/inicio', { empleados })
//     } catch (error) {
//         console.error('Error al consultar en la base de datos:', error);
//         res.status(500).send('Error interno del servidor');
//     }
// });


router.get('/timezone/employ', async (req, res) => {
    try {
        const empleadosAll = await pool.query(`SELECT * FROM empleados LEFT JOIN departamentos ON empleados.e_id = departamentos.d_id`)
        res.render('./vistas/empleadosAll', { empleadosAll })
    } catch (error) {
        console.error('Error al consultar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/timezone/employnot', async (req, res) => {
    try {
        const empleadosnot = await pool.query(`SELECT * FROM empleados WHERE d_id IS NUll;`)
        res.render('./vistas/empleadosnot', { empleadosnot })
    } catch (error) {
        console.error('Error al consultar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/timezone/employed', async (req, res) => {
    try {
        const empleadosF = await pool.query(`SELECT * FROM empleados INNER JOIN departamentos ON empleados.e_id = departamentos.d_id;    `)
        res.render('./vistas/empleadosF', { empleadosF })
    } catch (error) {
        console.error('Error al consultar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;