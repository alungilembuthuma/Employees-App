import React from 'react';

function EmployeeCard({ employee, deleteEmployee }) {
  return (
    <div className="employee-card">
      <h3>{employee.name} {employee.surname}</h3>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Position: {employee.position}</p>
      <img src={employee.image} alt="Employee" width="100" />
      <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
    </div>
  );
}

export default EmployeeCard;
