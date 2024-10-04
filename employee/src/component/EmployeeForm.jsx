import React, { useState } from 'react';

function EmployeeForm({ employee, setEmployee, handleAddEmployee }) {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [phone, setPhone] = useState(employee.phone);
  const [position, setPosition] = useState(employee.position);
  const [image, setImage] = useState(employee.image); // add image state

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddEmployee({ name, email, phone, position, image }); // pass image to handleAddEmployee
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ fontSize: "30px" }}>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label style={{ fontSize: "30px" }}>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label style={{ fontSize: "30px" }}>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <br />
      <label style={{ fontSize: "30px" }}>
        Position:
        <input type="text" value={position} onChange={(event) => setPosition(event.target.value)} />
      </label>
      <br />
      <label style={{ fontSize: "30px" }}>
        Image:
        <input type="file" onChange={(event) => setImage(event.target.files[0])} />
      </label>
      <br />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;