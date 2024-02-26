import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navigat">
      {/*  */}
      <motion.div className='sidebar' 
      initial={{ x:-60 }}
      animate={{ x:0 }}
      transition={{type: 'tween', duration: 0.5, ease: 'easeInOut'}}
      >
      <motion.h2 className='lg'
            initial={{ x:-60 }}
            animate={{ x:0 }}
            transition={{type: 'tween', duration: 0.5, ease: 'easeInOut',delay: 0.1}}
          >&lt;RVN&gt;</motion.h2>
          <motion.ul>
          <motion.li initial={{ x:-60 }}
      animate={{ x:0 }}
      transition={{type: 'tween', duration: 0.5, ease: 'easeInOut', delay: 0.2}}><Link to='home' smooth duration={500}>HOME</Link></motion.li>
          <motion.li initial={{ x:-60 }}
      animate={{ x:0 }}
      transition={{type: 'tween', duration: 0.5, ease: 'easeInOut', delay: 0.3}}><Link to='about' smooth duration={500}>ABOUT</Link></motion.li>
          <motion.li initial={{ x:-60 }}
      animate={{ x:0 }}
      transition={{type: 'tween', duration: 0.5, ease: 'easeInOut', delay: 0.5}}><Link to='work' smooth duration={500}>PROJECTS</Link></motion.li>
          <motion.li initial={{ x:-60 }}
      animate={{ x:0 }}
      transition={{type: 'tween', duration: 0.5, ease: 'easeInOut', delay: 0.6}}><Link to='contact' smooth duration={500}>CONTACT</Link></motion.li>
          </motion.ul>
      </motion.div>
    </nav>
  )
}

export default Navbar
