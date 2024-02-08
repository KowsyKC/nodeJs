const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Get all expenses
router.get('/', expenseController.getAllExpenses);

// Add a new expense
router.post('/', expenseController.createExpense);

// Delete an expense
router.delete('/:id', expenseController.deleteExpense);

// Edit an expense
router.put('/:id', expenseController.editExpense);

module.exports = router;