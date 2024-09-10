
import { useState } from 'react';



function Login(){
  const[Name,setName]=useState('');
  const[Email,setEmail]=useState('');
  const[Phone_Number,setPhone_Number]=useState('');
  const[Employee_Positon,setEmployee_Positon]=useState('');
  const[ID,setID]=useState('');



const handleSubmit =()=>{
 const Logindata = {
  
  Name,
  Email,
  Phone_Number,
  Employee_Positon,
  ID,

 }

 const existingEmployees = JSON.parse(localStorage.getItem("Employees")) || [];
 existingEmployees.push(Logindata);
 localStorage.setItem("Employees", JSON.stringify(existingEmployees));
 console.log(Logindata)
 
 alert("Submited succesfuly")
}


    return(
      <>
   
      <div className="container" style={{backgroundColor:"pink", height:"100vh"}}>
       
        <div className="form" style={{marginLeft:"30%", width:"40%", marginTop:"5%"}} >
          <h1>Register Form</h1>
      <br></br> 
          <div className="input" >
         
            <input type="text" placeholder="Name" value={Name}   onChange={e => setName(e.target.value)}  ></input>
          </div>
          <div className="input">
        
            <input type="Email" placeholder="Email" value={Email}   onChange={e => setEmail(e.target.value)}   ></input>
          </div>
          <div className="input">
       
            <input type="number" placeholder="Phone Number" value={Phone_Number}  onChange={e => setPhone_Number(e.target.value)}  ></input>
          </div>
          <div className="input">
       
            <input type="text" placeholder="Employee Positon" value={Employee_Positon}   onChange={e => setEmployee_Positon(e.target.value)}  ></input>
          </div>
          <div className="input">
       
            <input type="text" placeholder="ID" value={ID}    onChange={e => setID(e.target.value)}  ></input>
          </div><br></br>
          <button style={{width:"100px",marginLeft:"110px",backgroundColor:" rgb(18, 139, 173",border:"none"}} onClick={handleSubmit}>Submit</button>
        </div>
     
      </div>
     
   
      
      </>
    )
}
export default Login;