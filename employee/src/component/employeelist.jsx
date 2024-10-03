import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
          />
        ))
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
}

export default EmployeeList;
