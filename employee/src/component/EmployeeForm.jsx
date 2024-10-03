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
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="surname"
        value={form.surname}
        onChange={handleChange}
        placeholder="Surname"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <input
        name="position"
        value={form.position}
        onChange={handleChange}
        placeholder="Employee Position"
        required
      />
      <input
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
