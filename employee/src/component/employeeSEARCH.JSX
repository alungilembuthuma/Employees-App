import React, { useState } from 'react';

function EmployeeSearch({ employees }) {
  const [searchID, setSearchID] = useState('');
  const [foundEmployee, setFoundEmployee] = useState(null);

  const handleSearch = () => {
    const employee = employees.find((emp) => emp.id === searchID);
    setFoundEmployee(employee);
  };

  return (
    <div>
<h1>Search</h1>
    </div>
  );
}

export default EmployeeSearch;
