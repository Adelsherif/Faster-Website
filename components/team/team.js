import React from 'react';
import Image from 'next/image';
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import Style from '../../styles/Team.module.css';

export default function Team() {
  return (
    <div className={Style.team}>
        <div className='container'>
            <div className='head'>
                <h5>DELIVERY TEAM</h5>
                <h2>Meet Our Delivery Team</h2>
            </div>
            <div className={Style.inner}>
                <div className={Style.member}>
                    <div className={Style.image}>
                        <Image src={require('./team-1.jpg')} alt="image" />
                    </div>
                    <div className={Style.text}>
                        <div className={Style.address}>
                            <h4>Full Name</h4>
                            <p>Designation</p>
                        </div>
                        <div className={Style.links}>
                            <ul>
                                <li><FaTwitter /></li>
                                <li><FaFacebookF /></li>
                                <li><FaLinkedinIn /></li>
                                <li><FaInstagram /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Style.member}>
                    <div className={Style.image}>
                        <Image src={require('./team-2.jpg')} alt="image"/>
                    </div>
                    <div className={Style.text}>
                        <div className={Style.address}>
                            <h4>Full Name</h4>
                            <p>Designation</p>
                        </div>
                        <div className={Style.links}>
                            <ul>
                            <li><FaTwitter /></li>
                            <li><FaFacebookF /></li>
                            <li><FaLinkedinIn /></li>
                            <li><FaInstagram /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Style.member}>
                    <div className={Style.image}>
                        <Image src={require('./team-3.jpg')} alt="image" />
                    </div>
                    <div className={Style.text}>
                        <div className={Style.address}>
                            <h4>Full Name</h4>
                            <p>Designation</p>
                        </div>
                        <div className={Style.links}>
                            <ul>
                                <li><FaTwitter /></li>
                                <li><FaFacebookF /></li>
                                <li><FaLinkedinIn /></li>
                                <li><FaInstagram /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Style.member}>
                    <div className={Style.image}>
                        <Image src={require('./team-4.jpg')} alt="image" />
                    </div>
                    <div className={Style.text}>
                        <div className={Style.address}>
                            <h4>Full Name</h4>
                            <p>Designation</p>
                        </div>
                        <div className={Style.links}>
                            <ul>
                            <li><FaTwitter /></li>
                            <li><FaFacebookF /></li>
                            <li><FaLinkedinIn /></li>
                            <li><FaInstagram /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}