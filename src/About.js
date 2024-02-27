import React from 'react'
import './About.css';
import Example from './EncryptButton';
import ParallaxText from './scrab.tsx';
import { motion } from "framer-motion";
import { DiHtml5, DiCss3,DiJsBadge,DiReact,DiGithubBadge,DiGit,DiVisualstudio } from "react-icons/di";
import { BiLogoTypescript,BiLogoJavascript,BiLogoPostgresql } from "react-icons/bi";
import { FaBootstrap,FaStackOverflow,FaSass,FaPython,FaJava } from "react-icons/fa6";
import { SiTailwindcss,SiSqlite } from "react-icons/si";


const About = () => {
  return (
    <div className='about'>
        {/* <div className="abtxt">ABOUT <span>ME</span></div> */}
        <section className='hder'>
        <ParallaxText baseVelocity={-5}><div className="abtxt">ABOUT <span>ME</span></div></ParallaxText>
        <ParallaxText baseVelocity={5}><div className="abtxt">ABOUT <span>ME</span></div></ParallaxText>
        <div className="abtdat">
          <motion.div 
          initial={{ y:50,opacity:0 }}
          whileInView={{ y:0,opacity:1 }}
          viewport={{ once: true }}
          transition={{type: 'tween', duration: .8, ease: 'easeInOut', delay:.1}}
          className="abdatd hiii">
            <div className="par">
              <p><span>Hi there,</span> <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m Dasun, currently I live in Galle as an Undergraduate at University of Kelaniya. My projects include UX design, UI animations, and Logo illustration. Being comfortable with code allows me to rapidly prototype and validate experiences. <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In my spare time I like to play hockey, play video games, and make mods. I’m always down for hearing about new projects, so feel free to drop me a message.</p>
            </div>
            <motion.div
              initial={{ y:50,opacity:0 }}
              whileInView={{ y:0,opacity:1 }}
              viewport={{ once: true }}
              transition={{type: 'tween', duration: .8, ease: 'easeInOut', delay:.2}}
             className="sklls">
              <DiHtml5 />
              <DiCss3 />
              <BiLogoJavascript />
              <BiLogoTypescript />
              <DiReact />
              <SiTailwindcss />
              <FaBootstrap />
              <DiGithubBadge />
              <DiGit />
              <DiVisualstudio />
              <FaStackOverflow />
              <BiLogoPostgresql />
              <SiSqlite />
              <FaPython />
              <FaJava />
              <i class="devicon-c-plain"></i>
          
            </motion.div>
          </motion.div>
          <div className="abdatd edu">
            <motion.div
            initial={{ y:50,opacity:0 }}
          whileInView={{ y:0,opacity:1 }}
          viewport={{ once: true }}
          transition={{type: 'tween', duration: .8, ease: 'easeInOut', delay:.4}}
            >
              <div><p id='hed'>Education</p><br />
              <p style={{color: '#0aff9d', fontWeight: '500'}}>  &nbsp; 2008 - 2021</p>
              <p id='schl'> RICHMOND COLLEGE GALLE</p>
              </div>
              <br /><br />
              <p style={{color: '#0aff9d', fontWeight: '500'}}>  &nbsp; since 2023</p>
              <p id='schl'>UNIVERSITY OF &nbsp; KELANIYA</p>
              <p style={{color: '#0aff9d', fontWeight: '500'}}>  &nbsp; Bsc. (Hons.) Computer Science</p>
              
            </motion.div>


          </div>
        </div>
        </section>
        
    </div>
  )
}

export default About
