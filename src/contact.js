import React from 'react'
import './contact.css';
import Scrab from './scrab.tsx';
import ParallaxText from './scrab.tsx';
import Coneml from './cntct.js';
import Bubltxt from './bubltxt.tsx';

const Contact = () => {
    return (  

        <div className="contact">
            <Scrab></Scrab>
           <section className='hder'>
            <ParallaxText baseVelocity={-5}><div className="abtxt">CONT<span>ACT</span></div></ParallaxText>
            <ParallaxText baseVelocity={5}><div className="abtxt">CONT<span>ACT</span></div></ParallaxText>
            <div className="cntcwrap">
                <div className='lnks'>
                    <div className='lnhed'>Drop a message</div>
                    <Bubltxt></Bubltxt>

                </div>
                <div className='eml'>
                   <Coneml></Coneml> 
                </div>
            </div>
            
           </section>
        </div>

     );
}
 
export default Contact;