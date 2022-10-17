import React, { useState } from 'react';
import {FaTruck,FaBars,FaCaretDown} from "react-icons/fa";
import Style from "../../styles/Header.module.css";

export default function Header() {
    const [index,setIndex] = useState(1);
return (
    <div className={Style.header}>
        <div className='container-fulid'>
            <div className={Style.inner}>
                <div className={Style.logo}>
                    <div className={Style.icon}><FaTruck /></div>
                    <h1>FASTER</h1>
                </div>
                <div className={Style.links}>
                    <ul className={Style.firstList}>
                        <li className={Style.barsIcon}><div className={Style.icon}><FaBars /></div>
                            <ul className={Style.secondList}>
                                <li className={index === 1 ? Style.active : ''} onClick={() => setIndex(1)}><a href="">Home</a></li>
                                <li className={index === 2 ? Style.active : ''} onClick={() => setIndex(2)}><a href="#about">About</a></li>
                                <li className={index === 3 ? Style.active : ''} onClick={() => setIndex(3)}><a href="#services">Services</a></li>
                                <li className={index === 4 ? Style.active : ''} onClick={() => setIndex(4)}><a href="#price">Price</a></li>
                                <li className={Style.pages}><a href="#pages" >Pages<span><FaCaretDown /></span></a>
                                        <ul>
                                            <li>Blog Grid</li>
                                            <li>Blog Details</li>
                                        </ul>
                                </li>
                                <li className={index === 6 ? Style.active : ''} onClick={() => setIndex(6)}><a href="#contact">Contact</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={Style.btn}>
                    <button>Get A Quote</button>
                </div>
            </div>
        </div>
    </div>
)}