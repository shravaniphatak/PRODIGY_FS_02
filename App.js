import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios.get('http://localhost:5000/api/employees/read').then(response => {
      setEmployees(response.data);
    });
  };

  const selectEmployee = employee => {
    setSelectedEmployee(employee);
  };

  const deleteEmployee = id => {
    axios.delete(`http://localhost:5000/api/employees/delete/${id}`).then(response => {
      fetchEmployees();
    });
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm selectedEmployee={selectedEmployee} fetchEmployees={fetchEmployees} />
      <EmployeeList employees={employees} selectEmployee={selectEmployee} deleteEmployee={deleteEmployee} />
    </div>
  );
};

export default App;
