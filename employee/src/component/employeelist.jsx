import React from 'react';
import EmployeeCard from './EmployeeCards';

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div style={{backgroundImage:"url(https://th.bing.com/th/id/OIP.5rFlkz6eyUiqlrhpF8xZYAHaIH?w=863&h=945&rs=1&pid=ImgDetMain,jpg)", width:"100%", height:"100vh"}}>
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
