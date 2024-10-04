import React from 'react';
import Company from '../assets/OIP__2_-removebg-preview.png'
import EmployeeList from './employeelist';

export default function Landing() {
  return (
    <div style={{ backgroundImage: `url(https://th.bing.com/th/id/R.255653253352dcdc64b69bed64ee9361?rik=GFcz9vQtIV%2fegg&riu=http%3a%2f%2fwww.abcstevedoring.co.za%2fdemo_files%2fslider%2fmemberslider1.jpg&ehk=oYW26YFiuJ3QMdjW7JB6x10aIr9zLB3fhmGJD%2brB7tg%3d&risl=&pid=ImgRaw&r=0.jpg)`, width: "100%", height: "100vh", position:"fixed"}}>
      <img src={Company} style={{width:"25%"}}/>
      <h1 style={{fontFamily:"sans-serif", marginLeft:"41%", fontSize:"60px", marginTop:"-7%"}}>Employees App</h1>
      <div>
        <button style={{backgroundColor:"#4CAF50", color:"#fff", padding:"10px", marginLeft:"90%", marginTop:"-20%%"}}>
            <a href="/employeelist" style={{textDecoration:"none", color:"#fff"}}>EmployeeList</a>
        </button>
      </div>
    </div>
  )
}