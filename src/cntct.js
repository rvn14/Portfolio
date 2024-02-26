import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Coneml = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mwp1k2m', 'template_zxn5pzh', form.current, {
        publicKey: 'UviYwHJ1YA7x7c0DL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Enter name'/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Enter email address'/>
      <label>Message</label>
      <textarea name="message" placeholder='Type your message...'/>
      <motion.input
      
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className='subbtn' type="submit" value="Send" />
    </form>
  );
};

export default Coneml;