import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination ,FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Style from '../../styles/Testmonial.module.css';

export default function Testmonial() {
  return (
    <div className={Style.testmonial}>
        <div className='container'>
            <div className='head'>
                <h5>TESTIMONIAL</h5>
                <h2>Our Clients Say</h2>
            </div>
            <div className={Style.inner}>
            <Swiper
                loop = {true}
                effect={"coverflow"}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView = {3}
                centeredSlides={true}
                pagination={{"clickable": true}}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                breakpoints= {{
                    0: {slidesPerView: 1},
                    768: {slidesPerView: 2},
                    1280: {slidesPerView: 3}
                }}
    >
        <SwiperSlide>
            <div className={Style.content}>
                    <div className={Style.quote}>
                        <Image src={require('./quote.png')} alt="image" />
                    </div>
                <div className={Style.profile}>
                    <div className={Style.image}>
                        <Image src={require('./testimonial-1.jpg')} alt="image" />
                    </div>
                    <div className={Style.name}>
                        <h4>client Name</h4>
                        <p>- Profession</p>
                    </div>
                </div>
                <div className={Style.text}>
                <p>Dolor sea ipsum ipsum et.lorem magna vero dolor dolores. 
                    Rebum eirmod no dolor diam dolor amet ipsum</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Style.content}>
                    <div className={Style.quote}>
                        <Image src={require('./quote.png')} alt="image" />
                    </div>
                <div className={Style.profile}>
                    <div className={Style.image}>
                        <Image src={require('./testimonial-2.jpg')} alt="image" />
                    </div>
                    <div className={Style.name}>
                        <h4>client Name</h4>
                        <p>- Profession</p>
                    </div>
                </div>
                <div className={Style.text}>
                    <p>Dolor sea ipsum ipsum et.lorem magna vero dolor dolores. 
                    Rebum eirmod no dolor diam dolor amet ipsum</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Style.content}>
                    <div className={Style.quote}>
                        <Image src={require('./quote.png')} alt="image" />
                    </div>
                <div className={Style.profile}>
                    <div className={Style.image}>
                        <Image src={require('./testimonial-3.jpg')} alt="image" />
                    </div>
                    <div className={Style.name}>
                        <h4>client Name</h4>
                        <p>- Profession</p>
                    </div>
                </div>
                <div className={Style.text}>
                <p>Dolor sea ipsum ipsum et.lorem magna vero dolor dolores. 
                    Rebum eirmod no dolor diam dolor amet ipsum</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Style.content}>
                    <div className={Style.quote}>
                        <Image src={require('./quote.png')} alt="image" />
                    </div>
                <div className={Style.profile}>
                    <div className={Style.image}>
                        <Image src={require('./testimonial-4.jpg')} alt="image" />
                    </div>
                    <div className={Style.name}>
                        <h4>client Name</h4>
                        <p>- Profession</p>
                    </div>
                </div>
                <div className={Style.text}>
                <p>Dolor sea ipsum ipsum et.lorem magna vero dolor dolores. 
                    Rebum eirmod no dolor diam dolor amet ipsum</p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
            </div>
        </div>
    </div>
)}