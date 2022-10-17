import React, { useState } from 'react';
import Image from 'next/image';
import {FaPlay,FaTimes} from "react-icons/fa";
import Style from '../../styles/About.module.css';


export default function About() {
    const [index,setIndex] = useState(0);
return (
    <div className={Style.about} id="about">
        <div className='container'>
            <div className={Style.inner}>
                <div className={Style.image}>
                    <Image src={require('./about.jpg')} alt="image" />
                    <p>25+ Years Experience</p>
                </div>
                <div className={Style.text}>
                    <h5>ABOUT US</h5>
                    <h2>Trusted & Faster Logistic Service Provider</h2>
                    <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et.
                        Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. 
                        Erat duo eos et erat sed diam duo</p>
                    <div className={Style.identifiy}>
                        <div className={Style.controller} onClick={() => setIndex(1)}>
                            <div className={Style.icon}><FaPlay /></div>
                            <p>Play Video</p>
                        </div>
                    <div className= {index === 0 ? Style.vedio : Style.hide}>
                        <div className={Style.icon} onClick={() => setIndex(0)}><FaTimes /></div>
                        <Image src={require('./about-01.gif')} alt="image"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
