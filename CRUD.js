const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new employee
router.post('/create', (req, res) => {
  const { name, position, department, salary } = req.body;
  const sql = 'INSERT INTO employees (name, position, department, salary) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, position, department, salary], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Employee added successfully!', employeeId: result.insertId });
  });
});

// Read all employees
router.get('/read', (req, res) => {
  const sql = 'SELECT * FROM employees';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Update an employee
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, position, department, salary } = req.body;
  const sql = 'UPDATE employees SET name = ?, position = ?, department = ?, salary = ? WHERE id = ?';
  db.query(sql, [name, position, department, salary, id], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Employee updated successfully!' });
  });
});

// Delete an employee
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM employees WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Employee deleted successfully!' });
  });
});

module.exports = router;
