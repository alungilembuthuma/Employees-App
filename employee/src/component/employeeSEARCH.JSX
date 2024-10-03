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
      <h2>Search Employee</h2>
      <input
        value={searchID}
        onChange={(e) => setSearchID(e.target.value)}
        placeholder="Enter Employee ID"
      />
      <button onClick={handleSearch}>Search</button>
      {foundEmployee && (
        <div>
          <h3>Found Employee</h3>
          <p>Name: {foundEmployee.name}</p>
          <p>Email: {foundEmployee.email}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeSearch;
