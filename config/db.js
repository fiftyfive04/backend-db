const mysql = require("mysql")
require("dotenv").config()

// Create a MySQL connection pool
const pool = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10 
});

pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log('Database connected successfully');
    connection.release(); // Release the connection
});

// Export the pool to be used in other files
module.exports = pool;