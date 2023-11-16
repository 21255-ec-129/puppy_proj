// import React from "react";
// import './login.css'
// function LoginSignup(){
//     return(
//         <div className='loginsignup'>
//            <div className='loginsignup-container'>
//             <h1>Sign Up</h1>
//             <div className='loginsignup-fields'>
//                 <input type='text' placeholder='Your Name'/>
//                 <input type='email' placeholder='Email Address'/>
//                 <input type='password' placeholder='Password'/>
//              </div>
//              <button>Continue</button>
//              <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
//              <div className='loginsignup-agree'>
//                 <input type='checkbox' name='' id=''/>
//                 <p>By continuing, I agree to the terms of use & privacy policy</p>
//              </div>
//            </div>
//         </div>
//     )
// }
// export default LoginSignup;


import {useState} from 'react'
import axios from "axios"
import '../App.css';
import './login.css'

const LoginSignup =()=>{
    const [formdata,setFormdata] = useState({
        'username':'',
        'email':'',
        'password':''
    })
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addstud',{formdata})
        .then((res)=>console.log(res.stud))
    }
    const onClick=()=>{
        alert('You Login Successfully.THANK YOU@')
        window.location.reload()
    }
    return(
        <div className="container">  
            <br/><br/><br/> 
            <center>
            <br/><br/><br/>     
            <form onSubmit={handleSubmit} className="app-wrapper">
            <h1 className="title">LOGIN</h1>
              <label className="fooditemname">UserName :</label>
              <input className="input" type="text" name="name"  onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/>
              <br/>
              <label className="fooditemname">Email :</label>
              <input className="input" type="email" name="name" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
              <br/>
              <label className="fooditemname">Password:</label>
              <input className="input" type="password" name="name" onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
              <br/>
              <br/>
              <input type="submit" value="CONTACT" className="submit" onClick={onClick}/>
            </form>
            </center>
            <br/><br/><br/>  
        </div>
    )
}
export default LoginSignup;
                  