import React from 'react';
import Employee from '../assets/EMPLOYEE.jpg'
import Employeed from '../assets/employeed.jpg'

function EmployeeCard({ employee, handleDeleteEmployee, handleEditEmployee }) {
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEmployee({ ...employee, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };
    
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px',fontFamily:"sans", fontStyle:"bold"}}>
      <h2>{employee.name}</h2>
      <input
        type="file"
        className="form-control mb-3"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Position: {employee.position}</p>
      
      <button onClick={() => handleEditEmployee(employee)}>Edit</button>
      <button onClick={() => handleDeleteEmployee(employee)}>Delete</button>
    </div>
  );
}

export default EmployeeCard;