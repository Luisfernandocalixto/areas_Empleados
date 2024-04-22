const mysql = require('mysql');
const { promisify } = require('util');
const { database, databaseT } = require("./keys.js");
const { createClient } = require("@libsql/client");
const pool = mysql.createPool(database);
require('dotenv').config();


pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error('Database connection was closed');
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error('Database hast to many connections');
        }
        if (err.code === "ECONNREFUSED") {
            console.error('Database connection was refused');
        }
    }
    if (connection) connection.release();
    console.log('DB is Connected');
    return;

});

pool.query = promisify(pool.query);


const client = createClient({
    url: 'https://my-db-luisfernandocalixto.turso.io',
    authToken: process.env.DB_TOKEN,
});


module.exports = {
    pool,
    client
};
