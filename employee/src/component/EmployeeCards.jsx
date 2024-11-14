import React from 'react';

function EmployeeCard({ employee, handleDeleteEmployee, handleEditEmployee }) {
  return (
    <div style={styles.card}>
      <img src={employee.image} alt={`${employee.name}'s image`} style={styles.image} />
      <h2 style={styles.cardTitle}>{employee.name}</h2>
      <p style={styles.cardText}>Email: {employee.email}</p>
      <p style={styles.cardText}>Phone: {employee.phone}</p>
      <p style={styles.cardText}>Position: {employee.position}</p>
      <div style={styles.buttons}>
        <button onClick={handleEditEmployee} style={styles.editButton}>Edit</button>
        <button onClick={handleDeleteEmployee} style={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff', 
    borderRadius: '8px', 
    padding: '20px', 
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', 
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '24px', 
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px', 
    color: '#555',
    marginBottom: '10px',
  },
  buttons: {
    display: 'flex', 
    justifyContent: 'space-between', 
    width: '100%',
  },
  editButton: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '8px 16px',
    backgroundColor: '#F44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default EmployeeCard;
