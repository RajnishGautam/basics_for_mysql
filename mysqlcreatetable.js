const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
const db = mysql.createConnection({

host: 'localhost',
user: 'root',
password: '',
database: 'rajnish'
});
db.connect(err => {
if (err) {
console.error('Error connecting to MySQL:', err);
return;
}
console.log('Connected to MySQL');
});
app.get('/create', (req, res) => {
const query = 'CREATE TABLE rajnish1 (roll int, name Varchar(200))';
db.query(query, (err, result) => {
if (err) {
    res.status (500).send('Error creating table: err.message');
    return;}
    res.status(201).send('Table created successfully with ID: + result.insertId');
});
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

});

console.log("Server running on port ${PORT}");