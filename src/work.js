import React from 'react'
import './work.css';
import Scrab from './scrab.tsx';
import ParallaxText from './scrab.tsx';

const Project = () => {
    return (  

        <div className="work">
            <Scrab></Scrab>
           <section className='hder'>
            <ParallaxText baseVelocity={-5}><div className="abtxt">PROJ <span>ECTS</span></div></ParallaxText>
            <ParallaxText baseVelocity={5}><div className="abtxt">PROJ <span>ECTS</span></div></ParallaxText>
           </section>
        </div>

     );
}
 
export default Project;