import React from 'react';
import {FaPlane,FaShip,FaTruck,FaHome} from "react-icons/fa";
import Style from '../../styles/Services.module.css';

export default function Services() {
  return (
    <div className={Style.services} id="services">
        <div className="container">
            <div className="head">
                <h5>OUR SERVICES</h5>
                <h2>Best Logistic Services</h2>
            </div>
            <div className={Style.inner}>
                <div className={Style.element}>
                    <div className={Style.address}>
                        <div className={Style.icon}><FaPlane /></div> 
                        <p>Air Freight</p>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a href="#">Read More..</a>
                </div>
                <div className={Style.element}>
                    <div className={Style.address}>
                        <div className={Style.icon}><FaShip /></div>
                        <p>Ocean Freight</p>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a href="#">Read More..</a>
                </div>
                <div className={Style.element}>
                    <div className={Style.address}>
                        <div className={Style.icon}><FaTruck /></div>
                        <p>Land Transport</p>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a href="#">Read More..</a>
                </div>
                <div className={Style.element}>
                    <div className={Style.address}>
                        <div className={Style.icon}><FaHome /></div>
                        <p>Cargo Storage</p>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a href="#">Read More..</a>
                </div>
            </div>
        </div>
    </div>
)}