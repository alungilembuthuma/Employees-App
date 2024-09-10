import React, { useState, useEffect } from 'react';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '' });

  useEffect(() => {
    // retrieve employees from local storage on mount
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  useEffect(() => {
    // store employees in local storage when they change
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // create new employee
    fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee),
    })
      .then(response => response.json())
      .then(data => {
        setEmployees([...employees, data]);
        setNewEmployee({ name: '', email: '' });
      });
  };

  const handleUpdate = (id, updatedEmployee) => {
    // update employee
    fetch(`/api/employees/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedEmployee),
    })
      .then(response => response.json())
      .then(data => setEmployees(employees.map(employee => employee.id === id ? data : employee)));
  };

  const handleDelete = (id) => {
    // delete employee
    fetch(`/api/employees/${id}`, { method: 'DELETE' })
      .then(() => setEmployees(employees.filter(employee => employee.id !== id)));
  };

  return (
    <div>
      <h1>Employees</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={newEmployee.name} onChange={(event) => setNewEmployee({ ...newEmployee, name: event.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={newEmployee.email} onChange={(event) => setNewEmployee({ ...newEmployee, email: event.target.value })} />
        </label>
        <button type="submit">Add Employee</button>
      </form>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} ({employee.email})
            <button onClick={() => handleUpdate(employee.id, { ...employee, name: 'Updated ' + employee.name })}>Update</button>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;