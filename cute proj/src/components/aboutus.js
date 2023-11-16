import React from "react";
import m4 from '../images/m4.jpg'
import img2 from '../images/img2.jpg'
import './aboutus.css'
function ABOUT(){
    return(
        <div>
           <div className="about-name">
            <img src={m4} alt="" height={600} width={1500}/>
           </div>
           <div className="about-data">
            <div >
                <p><h1>ABOUT US</h1>
                <i>Dogs for sale was founded out of the need to provide an ethical and convenient alternative to enable dog lovers in INDIA to find world-class purebred puppies.<br/>Too often we have seen horrific breeding practices in this part of the world; dominated by pet markets. 
                 Dams are over bred, often too young, and puppies are unhealthy and brought up in sub-standard living conditions.<br/> They are usually separated from their mother too early resulting in all sorts of health conditions, a lower quality of life and a shorter life span.
                At Dogs for sale we believe in the ethical treatment of animals and insist that dog breeding must be carried out in the most humane manner possible.<br/> We will never deal with unethical breeders under any circumstances.We have an extensive network of Kennel Club breeders, small family
                breeders and breed enthusiasts. We personally visit the breeder of every puppy that we supply where we examine the living conditions, verify the health and well being, and confirm the temperament, appearance and breed standards of their dogs.<br/>  We are constantly travelling to international 
                dog shows, renewing old acquaintances and making new ones!Prior to delivery, all of our puppies visit a qualified veterinarian, where they are given their first vaccinated, de-wormed and undergo a comprehensive health check up.  All of our puppies are certified healthy; the new owner will 
                receive the original, signed veterinary report.</i></p>
            </div>
            <div><img className="i" src={img2} alt="" height={500} width={400}/></div>
           </div>
        </div>
    )
}
export default ABOUT