import React from 'react';
import Employee from '../assets/EMPLOYEE.jpg'

function EmployeeCard({ employee, handleDeleteEmployee }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{employee.name}</h2>
      <img src={Employee} alt={employee.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Position: {employee.position}</p>
      
      <button onClick={handleDeleteEmployee}>Delete</button>
    </div>
  );
}

export default EmployeeCard;