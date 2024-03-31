const express = require('express');
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const session = require("express-session")
const MySQLStore = require("express-mysql-session")
// const passport = require('passport')
const { database } = require('./keys')
const util = require('util')
const pool = require("./database.js")


//  initialization
const app = express()

// setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}))

app.set('view engine', '.hbs')

//  Middlewares

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// routes 
// app.use(require('./routes'))
app.use(require('./routes/links.js'))
app.use('/vistas', require('./routes/links.js'));
app.get('/', async (req, res) => {
    try {
        res.send('Hola')
        // const empleados = await pool.query(`SELECT * FROM empleados INNER JOIN departamentos ON empleados.e_id = departamentos.d_id;    `)
        // res.render('./vistas/inicio', { empleados })
    } catch (error) {
        console.error('Error al consultar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});




// public
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.render('./vistas/vista404.hbs');
});


// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', 'http://localhost:' + app.get('port'));
})