import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import EmployeeList from './component/employeelist';
import Landing from './component/Landing';
import { AuthProvider } from './authContext';
import { db } from './firebaseConfig';
import Login from './component/login';
import Signup from './component/signup';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null);  
      }
    });

    return () => unsubscribe();  // Clean up the subscription on component unmount
  }, []);

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Landing />} />
        <Route 
          path="/employeelist" 
          element={user ? <EmployeeList /> : <p>Please log in to manage employees.</p>} 
        />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


