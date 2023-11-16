import React, { useState } from 'react'
import icon from '../images/icon.jpg'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar (){
    const [menu,setMenu] = useState("shop");
    return(
        <div className="navbar">
            <div className="nav-logo">
            <img className="logo" src={icon} alt=""/>
            <p>P<b>E</b>T H<b>U</b>B</p>
            </div>
            <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration : 'none'}} to='/'><i>HOME</i></Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Dogbreed")}}><Link style={{textDecoration : 'none'}} to='/Dogbreed'><i>DOG BREEDS</i></Link>{menu==="Dogbreed"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("About")}}><Link style={{textDecoration : 'none'}} to='/About'><i>ABOUT US</i></Link>{menu==="About"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration : 'none'}} to='/contact'><i>CONTACT US</i></Link>{menu==="contact"?<hr/>:<></>}</li>

            </ul>
        <div className='nav-login-cart'>
         <Link to='login'><button>Login</button></Link>
</div>

        </div>
        
    )
}
export default Navbar