import React from 'react';
import Style from '../../styles/Quote.module.css'

export default function Quote() {
return (
    <div className={Style.quote}>
        <div className='container'>
            <div className={Style.inner}>
                <div className={Style.text}>
                    <h5>GET A QUOTE</h5>
                    <h2>Request A Free Quote</h2>
                    <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. 
                        Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut.
                        Erat duo eos et erat sed diam duo</p>
                    <div className={Style.elements}>
                        <div className={Style.element}>
                            <h3>225</h3>
                            <p>SKilled Experts</p>
                        </div>
                        <div className={Style.element}>
                            <h3>1050</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className={Style.element}>
                            <h3>2500</h3>
                            <p>Complete Projects</p>
                        </div>
                    </div>
                </div>
                <div className={Style.form}>
                    <form>
                        <input type="text" placeholder='Your Name' />
                        <input type="email" placeholder='Your Email' />
                        <select id="services">
                            <option value="service">Select A Service</option>
                            <option value="service">Service - 01</option>
                            <option value="service">Service - 02</option>
                            <option value="service">Service - 03</option>
                        </select>
                        <input type="submit" value="Get A Quote" />
                    </form>
                </div>
        </div>
        </div>
    </div>
)}