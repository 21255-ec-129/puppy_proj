import './footer.css'
//import footer_logo from '../images/logo_big.png'
import instragram_icon from '../images/instagram_icon.png'
import pintester_icon from '../images/pintester_icon.png'
import whatsapp_icon from '../images/whatsapp_icon.png'

function Footer(){
    return( 
        <div className="footer">

<ul className='footer-links'>
    <li>Company</li>
    
    <li>About</li>
    <li>Contact</li>
</ul>
<div className='footer-social-icon'>
    <div className='footer-icon-container'>
        <img src={instragram_icon} alt=''/>
    </div>
    <div className='footer-icon-container'>
        <img src={pintester_icon} alt=''/>
    </div>
    <div className='footer-icon-container'>
        <img src={whatsapp_icon} alt=''/>
    </div>
</div>
<div className='footer-copyright'>
<hr/>
<p> copyright @2020-all right </p>
</div>
        </div>
    )
}
export default Footer