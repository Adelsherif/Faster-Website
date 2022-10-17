import React from 'react';
import {FaMapMarker,FaPhoneAlt,FaEnvelope,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaAngleRight} from "react-icons/fa";
import Style from '../../styles/Footer.module.css';

export default function Footer() {
return (
    <div className={Style.footer} id="contact">
        <div className='container-fulid'>
            <div className={Style.first}>
                    <div className={Style.address}>
                        <h3>Get In Touch</h3>
                        <ul>
                            <li><span><FaMapMarker /></span>123 Street, New York, USA</li>
                            <li><span><FaPhoneAlt /></span>+012 345 67890</li>
                            <li><span><FaEnvelope /></span>info@example.com</li>
                        </ul>
                        <ul className={Style.social}>
                            <li><FaTwitter /></li>
                            <li><FaFacebookF /></li>
                            <li><FaLinkedinIn /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                    <div className={Style.links}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><span><FaAngleRight /></span>Home</li>
                            <li><span><FaAngleRight /></span>About Us</li>
                            <li><span><FaAngleRight /></span>Our Services</li>
                            <li><span><FaAngleRight /></span>Pricing Plan</li>
                            <li><span><FaAngleRight /></span>Contact Us</li>
                        </ul>
                    </div>
                    <div className={Style.newsletter}>
                        <h3>Newsletter</h3>
                        <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor.
                            Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                        <form>
                            <input type="email" placeholder='Your E-mail Address' />
                            <input type="submit" value="Sign Up" />
                        </form>
                    </div>
            </div>
        </div>
            <hr/>
            <div className='container-fulid'>
                <div className={Style.second}>
                        <p>© <span>Your Site Name.</span> All Rights Reserved. Designed by <span>Adel Sherif</span></p>
                        <ul>
                            <li><a href='#'>Privacy</a></li>
                            <li><a href='#'>Terms</a></li>
                            <li><a href='#'>FAQS</a></li>
                            <li><a href='#'>Help</a></li>
                        </ul>
                </div>
            </div>
    </div>
)}