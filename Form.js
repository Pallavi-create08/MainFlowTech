
import React, { useState } from 'react';

function Form() {
  const [student, setStudent] = useState({
    name: '',
    rollNo: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      });

      if (response.ok) {
        alert('Student added successfully!');
        setStudent({ name: '', rollNo: '', email: '', password: '' });
      } else {
        alert('Error adding student.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Student Registration</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={student.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Roll No:</label>
        <input type="number" name="rollNo" value={student.rollNo} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={student.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={student.password} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
