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

app.get('/insert', (req, res) => {
  const {name, age, email} = req.query;

  const query = 'INSERT INTO users (name, age, email) VALUES (?, ?, ?)';
  db.query(query, [name, age, email], (err, result) => {
    if (err) {
      res.status(500).send('Error inserting data: ' + err.message);
      return;
    }
    res.status(201).send('Data inserted successfully with ID: ' + result.insertId);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});