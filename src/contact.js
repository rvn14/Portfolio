import React from 'react'
import './contact.css';
import ParallaxText from './scrab.tsx';
import Coneml from './cntct.js';
import Bubltxt from './bubltxt.tsx';
import { MdEmail } from "react-icons/md";

import { FaSquareXTwitter,FaLinkedin,FaSquareInstagram,FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
    return (  

        <div className="contact">
        
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
                <footer className="foot">
                    <div className="emil">
                        <MdEmail /><a href="mailto:dasunadithya123@gmail.com">dasunadithya123@gmail.com</a>
                    </div>
                    <div className="sclnks">
                        <a href="https://www.instagram.com/_rvn_d.a.s.u.n_"><FaSquareInstagram /></a>
                        <a href="https://twitter.com/DasunAdithya"><FaSquareXTwitter /></a>
                        <a href="https://www.linkedin.com/in/dasun-adithya-223844279/"><FaLinkedin /></a>
                        <a href="https://github.com/rvn14"><FaSquareGithub /></a>
                    </div>
                    <div className="cprit">Copyright © 2024 RVN_Dasun. All Rights Reserved.</div>
                </footer>
            </div>
            
           </section>
        </div>

     );
}
 
export default Contact;