import React from 'react';
import Style from '../../styles/Pricing.module.css';

export default function Pricing() {
  return (
    <div className={Style.pricing} id="price">
        <div className='container'>
            <div className='head'>
                <h5>PRICING PLAN</h5>
                <h2>Affordable Pricing Packages</h2>
            </div>
            <div className={Style.inner}>
                <div className={Style.parent}>
                    <div className={Style.child}>
                        <h1>49</h1>
                        <h3>Basic</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>Bootstrap 4</li>
                            <li>Responsive Layout</li>
                            <li>Compatible With All Browsers</li>
                        </ul>
                        <a href='#'>Order Now</a>
                    </div>
                </div>
                <div className={Style.parent}>
                    <div className={Style.child}>
                        <h1>99</h1>
                        <h3>Premium</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>Bootstrap 4</li>
                            <li>Responsive Layout</li>
                            <li>Compatible With All Browsers</li>
                        </ul>
                        <a href='#'>Order Now</a>
                    </div>
                </div>
                <div className={Style.parent}>
                    <div className={Style.child}>
                        <h1>149</h1>
                        <h3>Business</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>Bootstrap 4</li>
                            <li>Responsive Layout</li>
                            <li>Compatible With All Browsers</li>
                        </ul>
                        <a href='#'>Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}