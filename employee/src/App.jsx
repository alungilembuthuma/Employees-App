import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeSearch from './EmployeeSearch';

function App() {
  const [employees, setEmployees] = useState([]);

  // Load from localStorage when app loads
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) setEmployees(storedEmployees);
  }, []);

  // Save to localStorage when employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    ));
  };

  return (
    <div className="App">
      <h1>Employee Registration</h1>
      <EmployeeSearch employees={employees} />
      <EmployeeForm addEmployee={addEmployee} updateEmployee={updateEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
}

export default App;
