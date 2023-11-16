 import m3 from '../images/m3.jpeg'
import React from 'react'
import './contact.css'
import ws from '../images/whatsapp_icon.png'
import arrow from '../images/arrow.png'
import m2 from '../images/m2.jpg'
import m from '../images/m.jpg';
import ph from '../images/ph.png'

const Contact = () => {
    return(
      <div className='cute'>
        <img src={m2} className='cuteimg' alt=''/>      
        <div className='hero'>  
            <div className= "hero-left">
            <h3 >GET IN TOUCH WITH US</h3>
              <h1 className='h11'>Contact Info</h1>
              <div className='divv'>
                <div className="hero-hand-icon">  
                  <img src={ph} alt=""/>  
                  <p>contact us :</p>
                  <h4>+91-9818787859</h4>
                </div>
                <div className='con'>
                <img src={ws} alt=""/>
                <p>Whatsapp us :</p>
                <h4>+91-9818787859</h4>
                </div>
                <div className='con1'>
                <img src={m} alt=""/>
                <p>email</p>
                <h4>info@dogsforsale.co.in</h4>              
                </div>
              </div>
            <div className="hero-latest-btn">
                <div>Contact Now</div>
                <img src={arrow} alt=""/>
                </div>  
            </div>
           <div className="hero-right">
           <img src={m3} className='image1' alt=" "/>
           </div>
        </div>
        </div>
    )
}
export default Contact

