import React, { useState, useEffect } from 'react';
import EmployeeList from './components/employeesList';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage on component mount
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const handleAddEmployee = (newEmployee) => {
    // Add new employee 
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);

    // Store the updated array in local storage
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <div className='app' style={{ backgroundColor: "pink", width: "100%", height: "100vh" }}>
      <EmployeeList employees={employees} onAddEmployee={handleAddEmployee} />
    </div>
  );
}

export default App;