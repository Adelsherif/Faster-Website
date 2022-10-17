import React from 'react';
import Image from 'next/image';
import {FaDotCircle} from "react-icons/fa";
import Style from '../../styles/Section.module.css';

export default function Section() {
return (
    <div className={Style.section}>
        <div className='container'>
            <div className={Style.inner}>
                <div className={Style.image}>
                    <Image src={require('./feature.jpg')} alt="image" />
                </div>
                <div className={Style.text}>
                    <h4>WHY CHOOSE US</h4>
                    <h1>Faster, Safe and Trusted Logistics Services</h1>
                    <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit.
                    Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <ul>
                        <li><span><FaDotCircle /></span>Best In Industry</li>
                        <li><span><FaDotCircle /></span>Emergency Services</li>
                        <li><span><FaDotCircle /></span>24/7 Customer Support</li>
                    </ul>
                    <a href='#'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
)}