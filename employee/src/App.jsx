import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeForm from './component/EmployeeForm';
import EmployeeList from './component/EmployeeList';
// import EmployeeCard from './component/EmployeeCard';
import Landing from './component/Landing'

function App() {
  // ... rest of your code
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/employeelist" element={EmployeeList} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;