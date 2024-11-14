import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; 
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import EmployeeCard from './EmployeeCards';
import EmployeeForm from './EmployeeForm';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({ name: '', email: '', phone: '', position: '', image: '' });
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen to authentication state changes
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchEmployees();
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, 'employees'));
    const employeeList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setEmployees(employeeList);
  };

  const handleAddEmployee = async (newEmployee) => {
    if (!user) {
      console.error("User is not authenticated");
      return; // Prevent adding employee if not authenticated
    }

    try {
      await addDoc(collection(db, 'employees'), newEmployee);
      setEmployee({ name: '', email: '', phone: '', position: '', image: '' });
      fetchEmployees();  // Refresh employee list after adding
    } catch (error) {
      console.error("Error adding employee: ", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Employee Registration</h1>
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleAddEmployee={handleAddEmployee}
        editing={editing}
        user={user}
      />
      <h1 style={styles.title}>Employees List</h1>
      <div style={styles.employeeList}>
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f0f8ff", 
    height: '100vh', 
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  },
  title: {
    fontSize: "36px", 
    marginBottom: '20px', 
    color: '#333',
  },
  employeeList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    width: '80%',
  }
};

export default EmployeeList;
