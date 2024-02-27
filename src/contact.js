import React from 'react'
import './contact.css';
import ParallaxText from './scrab.tsx';
import Coneml from './cntct.js';
import Bubltxt from './bubltxt.tsx';
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

import { FaSquareXTwitter,FaLinkedin,FaSquareInstagram,FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
    return (  

        <div className="contact">
        
           <section className='hder'>
            <ParallaxText baseVelocity={-5}><div className="abtxt">CONT<span>ACT</span></div></ParallaxText>
            <ParallaxText baseVelocity={5}><div className="abtxt">CONT<span>ACT</span></div></ParallaxText>
            <div className="cntcwrap">
                <motion.div
                initial={{ y:40,opacity:0 }}
                whileInView={{ y:0,opacity:1 }}
                viewport={{ once: true }}
                transition={{type: 'tween', duration: .8, ease: 'easeInOut', delay:.2}}
                 className='lnks'>
                    <motion.div 
                    initial={{ y:20,opacity:0 }}
                    whileInView={{ y:0,opacity:1 }}
                    viewport={{ once: true }}
                    transition={{type: 'tween', duration: .8, ease: 'easeInOut', delay:.1}}
                    className='lnhed'>Drop a message</motion.div>
                    <Bubltxt></Bubltxt>

                </motion.div>
                <motion.div 
                initial={{ scale:0.9, opacity:0 }}
                whileInView={{ scale:1, opacity:1 }}
                viewport={{ once: true }}
                transition={{type: 'tween', duration: .8, ease: 'easeInOut', delay:.1}}
                className='eml'>
                   <Coneml></Coneml> 
                </motion.div>
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