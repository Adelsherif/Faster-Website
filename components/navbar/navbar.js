import React from 'react';
import {FaPhoneAlt,FaEnvelope,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaYoutube} from "react-icons/fa";
import Style from '../../styles/Navbar.module.css';


export default function Navbar() {
    return (
        <div className={Style.navbar}>
            <div className='container-fulid'>
                <div className={Style.inner}>
                <div className={Style.contactInfo}>
                    <div className={Style.element}>
                        <div className={Style.icon}><FaPhoneAlt /></div>
                        <p>+012 345 6789</p>
                    </div>
                    <div className={Style.element}>
                        <div className={Style.icon}><FaEnvelope /></div>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div className={Style.links}>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaTwitter /></li>
                        <li><FaLinkedinIn /></li>
                        <li><FaInstagram /></li>
                        <li><FaYoutube /></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
)}