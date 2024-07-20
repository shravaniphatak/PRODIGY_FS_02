import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ selectedEmployee, fetchEmployees }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    salary: ''
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData({
        name: selectedEmployee.name,
        position: selectedEmployee.position,
        department: selectedEmployee.department,
        salary: selectedEmployee.salary
      });
    }
  }, [selectedEmployee]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
import React from 'react';

const EmployeeList = ({ employees, selectEmployee, deleteEmployee }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.position} - {employee.department} - ${employee.salary}
            <button onClick={() => selectEmployee(employee)}>Edit</button>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedEmployee) {
      axios
        .put(`http://localhost:5000/api/employees/update/${selectedEmployee.id}`, formData)
        .then(response => {
          fetchEmployees();
          setFormData({ name: '', position: '', department: '', salary: '' });
        });
    } else {
      axios
        .post('http://localhost:5000/api/employees/create', formData)
        .then(response => {
          fetchEmployees();
          setFormData({ name: '', position: '', department: '', salary: '' });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <input
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Salary"
        required
      />
      <button type="submit">{selectedEmployee ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;
