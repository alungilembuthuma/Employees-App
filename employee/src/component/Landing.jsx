import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Company from '../assets/OIP__2_-removebg-preview.png';  // Assuming you have the image

export default function Landing() {
  return (
    <div style={{ backgroundImage: `url(https://th.bing.com/th/id/R.255653253352dcdc64b69bed64ee9361?rik=GFcz9vQtIV%2fegg&riu=http%3a%2f%2fwww.abcstevedoring.co.za%2fdemo_files%2fslider%2fmemberslider1.jpg&ehk=oYW26YFiuJ3QMdjW7JB6x10aIr9zLB3fhmGJD%2brB7tg%3d&risl=&pid=ImgRaw&r=0.jpg)`, width: "100%", height: "100vh", position: "fixed"}}>
      <img src={Company} style={{ width: "25%" }} alt="Company Logo"/>
      <h1>Welcome to Employee Management</h1>
      <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
