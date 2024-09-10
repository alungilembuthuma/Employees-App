import React from 'react';

function Employee({ employee, onUpdate, onDelete }) {
  return (
    <li>
      {employee.name} ({employee.email})
      <button onClick={() => onUpdate(employee.id, { ...employee, name: 'Updated ' + employee.name })}>Update</button>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </li>
  );
}

export default Employee;