import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  fetchExpenses();
});

async function fetchExpenses() {
  try {
    const response = await axios.get('http://localhost:3000/api/expenses');
    displayExpenses(response.data);
  } catch (error) {
    console.error('Error fetching expenses:', error);
  }
}

function displayExpenses(expenses) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  expenses.forEach(expense => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.id}</td>
      <td>${expense.description}</td>
      <td>${expense.amount}</td>
      <td>
        <button onclick="deleteExpense(${expense.id})">Delete</button>
        <button onclick="editExpense(${expense.id})">Edit</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

async function addExpense() {
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;

  try {
    await axios.post('http://localhost:3000/api/expenses', { description, amount });
    fetchExpenses();
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
  } catch (error) {
    console.error('Error adding expense:', error);
  }
}

async function deleteExpense(id) {
  try {
    await axios.delete(`http://localhost:3000/api/expenses/${id}`);
    fetchExpenses();
  } catch (error) {
    console.error('Error deleting expense:', error);
  }
}

async function editExpense(id) {
  const description = prompt('Enter new description:');
  const amount = prompt('Enter new amount:');

  try {
    await axios.put(`http://localhost:3000/api/expenses/${id}`, { description, amount });
    fetchExpenses();
  } catch (error) {
    console.error('Error editing expense:', error);
  }
}