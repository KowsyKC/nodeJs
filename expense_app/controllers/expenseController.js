const mysql = require('mysql2/promise');
const config = require('../config');

// Create a MySQL connection
//const connection = mysql.createConnection(config.mysql);
const pool = mysql.createPool(config.mysql);

// Controller methods
const getAllExpenses = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM expenses');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createExpense = async (req, res) => {
  const { description, amount } = req.body;
  const query = 'INSERT INTO expenses (description, amount) VALUES (?, ?)';

  try {
    const [result] = await pool.execute(query, [description, amount]);
    res.json({ id: result.insertId, description, amount });
  } catch (error) {
    console.error('Error creating expense:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM expenses WHERE id = ?';

  try {
    await pool.execute(query, [id]);
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error('Error deleting expense:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editExpense = async (req, res) => {
  const { id } = req.params;
  const { description, amount } = req.body;
  const query = 'UPDATE expenses SET description = ?, amount = ? WHERE id = ?';

  try {
    await pool.execute(query, [description, amount, id]);
    res.json({ id, description, amount });
  } catch (error) {
    console.error('Error editing expense:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  deleteExpense,
  editExpense,
};