CREATE DATABASE employee_management;

USE employee_management;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  position VARCHAR(100),
  department VARCHAR(100),
  salary DECIMAL(10, 2)
);
