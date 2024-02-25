import React from 'react'
import './Exp.css';
import Scrab from './scrab.tsx';
import ParallaxText from './scrab.tsx';
import { DiJsBadge } from "react-icons/di";

const Exp = () => {
    return (  

        <div className="exp">
            <Scrab></Scrab>
           <section className='hder'>
            <ParallaxText baseVelocity={-5}><div className="abtxt">EXPERI <span>ENCE</span></div></ParallaxText>
            <ParallaxText baseVelocity={5}><div className="abtxt">EXPERI <span>ENCE</span></div></ParallaxText>
           </section>
           <div>
            <DiJsBadge />
           </div>
        </div>

     );
}
 
export default Exp;