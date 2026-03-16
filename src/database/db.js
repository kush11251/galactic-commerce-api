const mysql = require('mysql2/promise');
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'galactic_commerce'
};
async function connect() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database');
        return connection;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}
module.exports = connect;