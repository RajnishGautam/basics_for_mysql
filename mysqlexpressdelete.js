//deletesql.js
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: '',      
  database: 'rajnish'
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

app.use(express.json());
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting record:', err);
      return res.status(500).send('Error deleting record');
    }
    res.send('Record deleted successfully');
  });
});


app.listen(port, () => {
  console.log("Server running at http://localhost:${port}");
});