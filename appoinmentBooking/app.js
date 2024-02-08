const express = require('express');
const bodyParser = require('body-parser');
const { db, queryAsync } = require('./utils/database');
const errorController = require('./controllers/error');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/api/user', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required fields.' });
    }
    const sql = 'INSERT INTO user (name, email, phone) VALUES (?, ?, ?)';
    const result = await queryAsync(sql, [name, email, phone]);
    const userId = result.insertId;
    return res.json({ id: userId, name, email, phone });
  } catch (error) {
    console.error('Error inserting user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/user', async (req, res) => {
  try {
    const sql = 'SELECT * FROM user';
    const result = await queryAsync(sql);
    return res.json(result);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const sql = 'DELETE FROM User WHERE id=?';
    await queryAsync(sql, [userId]);
    return res.json({ id: userId });
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});