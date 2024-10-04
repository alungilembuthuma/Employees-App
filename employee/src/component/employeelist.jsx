import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCards';
import EmployeeForm from './EmployeeForm';

const backgroundImage = "url(https://th.bing.com/th/id/OIP.5rFlkz6eyUiqlrhpF8xZYAHaIH?w=863&h=945&rs=1&pid=ImgDetMain,jpg)";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({ name: '', email: '', phone: '' });

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
    setEmployee({ name: '', email: '', phone: '' , position: ''});
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee, index) => index !== id));
  };

  return (
    <div style={{ backgroundImage, backgroundSize: 'cover', height: '100vh', padding: '20px' }}>
      <h1 style={{fontFamily:"sans-serif", marginLeft:"15%", fontSize:"50px"}}>Employee List</h1>
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleAddEmployee={handleAddEmployee}
      />
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          employee={employee}
          handleDeleteEmployee={() => handleDeleteEmployee(index)}
        />
      ))}
    </div>
  );
}

export default EmployeeList;