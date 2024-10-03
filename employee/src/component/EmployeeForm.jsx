import React, { useState } from 'react';

const initialFormState = {
  id: '',
  name: '',
  surname: '',
  email: '',
  phone: '',
  position: '',
  image: ''
};

function EmployeeForm({ addEmployee, updateEmployee }) {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updateEmployee(form);
    } else {
      const newEmployee = { ...form, id: Date.now().toString() };
      addEmployee(newEmployee);
    }
    setForm(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
           <h1>Employee Registration</h1>
      {/* <EmployeeSearch employees={employees} /> */}
      <EmployeeForm addEmployee={addEmployee} updateEmployee={updateEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
      
     <label></label> <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
       <label></label><input
        name="surname"
        value={form.surname}
        onChange={handleChange}
        placeholder="Surname"
        required
      />
       <label></label><input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
       <label></label><input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
       <label></label><input
        name="position"
        value={form.position}
        onChange={handleChange}
        placeholder="Employee Position"
        required
      />
       <label></label><input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">{form.id ? 'Update' : 'Add'} Employee</button>
    </form>
  );
}

export default EmployeeForm;
