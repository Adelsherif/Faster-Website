import React from 'react';
import Image from 'next/image';
import {FaRegBookmark,FaAngleRight} from "react-icons/fa";
import Style from '../../styles/Blogs.module.css';

export default function Blogs() {
return (
    <div className={Style.blogs} id="pages">
        <div className='container'>
            <div className='head'>
                <h5>OUR BLOG</h5>
                <h2>Latest From Blog</h2>
            </div>
            <div className={Style.inner}>
                <div className={Style.section}>
                    <div className={Style.image}>
                        <Image src={require('./blog-1.jpg')} alt="image" />
                        <div className={Style.date}>
                            <span>01</span>
                            <span>JAN</span>
                        </div>
                    </div>
                    <div className={Style.info}>
                        <div className={Style.person}>
                            <div className={Style.user}>
                                <Image src={require('./user.jpg')} alt="image" />
                            </div>
                            <div className={Style.name}>John Doe</div>
                            <div className={Style.job}><span><FaRegBookmark /></span>Web Design</div>
                        </div>
                        <div className={Style.text}>
                            <h2>Kasd tempor diam sea justo dolor</h2>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores.
                                Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                            <a href='#'>READ MORE<span><FaAngleRight /></span></a>
                        </div>
                    </div>
                </div>
                <div className={Style.section}>
                    <div className={Style.image}>
                        <Image src={require('./blog-2.jpg')} alt="image" />
                        <div className={Style.date}>
                            <span>01</span>
                            <span>JAN</span>
                        </div>
                    </div>
                    <div className={Style.info}>
                        <div className={Style.person}>
                            <div className={Style.user}>
                                <Image src={require('./user.jpg')} alt="image" />
                            </div>
                            <div className={Style.name}>John Doe</div>
                            <div className={Style.job}><span><FaRegBookmark /></span>Web Design</div>
                        </div>
                        <div className={Style.text}>
                            <h2>Kasd tempor diam sea justo dolor</h2>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores.
                                Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                            <a href='#'>READ MORE<span><FaAngleRight /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}