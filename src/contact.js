import React from 'react'
import './contact.css';
import Scrab from './scrab.tsx';
import ParallaxText from './scrab.tsx';

const Contact = () => {
    return (  

        <div className="contact">
            <Scrab></Scrab>
           <section className='hder'>
            <ParallaxText baseVelocity={-5}><div className="abtxt">CONTA <span>CTS</span></div></ParallaxText>
            <ParallaxText baseVelocity={5}><div className="abtxt">CONTA <span>CTS</span></div></ParallaxText>
           </section>
        </div>

     );
}
 
export default Contact;