import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCards';
import EmployeeForm from './EmployeeForm';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({ name: '', email: '', phone: '', position: '' });
  const [editing, setEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    setEmployee({ name: '', email: '', phone: '', position: '' });
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee, index) => index !== id));
  };

  const handleEditEmployee = (id) => {
    const employeeToEdit = employees[id];
    setEmployee(employeeToEdit);
    setEditing(true);
    setCurrentIndex(id);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    const updatedEmployees = [...employees];
    updatedEmployees[currentIndex] = updatedEmployee;
    setEmployees(updatedEmployees);
    setEmployee({ name: '', email: '', phone: '', position: '' });
    setEditing(false);
  };

  
  return (
    <div style={{ backgroundColor:"",backgroundSize: 'cover', height: '100vh', padding: '20px' }}>
      <h1 style={{fontFamily:"sans-serif", marginLeft:"15%", fontSize:"50px"}}>Employee Registration</h1>
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleAddEmployee={handleAddEmployee}
        handleUpdateEmployee={handleUpdateEmployee}
        editing={editing}
      />
      <h1 style={{fontFamily:"sans-serif", marginLeft:"15%", fontSize:"50px"}}>Employees List</h1>
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          employee={employee}
          handleDeleteEmployee={() => handleDeleteEmployee(index)}
          handleEditEmployee={() => handleEditEmployee(index)}
        />
      ))}
    </div>
  );
}

export default EmployeeList;