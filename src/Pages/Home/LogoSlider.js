import React, { useRef, useState } from "react";
import image1 from '../../assets/image1.jpg'
import logo1 from '../../assets/1.jpg'
import logo2 from '../../assets/2.jpg'
import logo4 from '../../assets/4.jpg'
import logo5 from '../../assets/5.jpg'
import logo6 from '../../assets/6.jpg'
import logo7 from '../../assets/7.jpg'
import logo8 from '../../assets/8.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Autoplay } from "swiper";



export default function LogoSlider() {

    const swiperRef = React.useRef();
    const onInit = (Swiper) => {
        swiperRef.current = Swiper;
    };
    const handleMouseEnter = () => {
        if (swiperRef.current) swiperRef.current.autoplay.stop();
    };
    const handleMouseLeave = () => {
        if (swiperRef.current) swiperRef.current.autoplay.start();
    };

    const logos = [
        {id: 1, 'image': logo1},
        {id: 2, 'image': logo2},
        {id: 4, 'image': logo4},
        {id: 5, 'image': logo5},
        {id: 6, 'image': logo6},
        {id: 7, 'image': logo7},
        {id: 8, 'image': logo8}
    ]



    return (
        <div className="">
            <h2 className="text-4xl font-bold text-center">Our Supportive Brands</h2>
        <div className="py-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
                onInit={onInit}
                loop={true}
                slidesPerView={7}
                spaceBetween={10}
                mousewheel={true}
                grabCursor={true}
                autoplay={{
                    delay: 0,
                    running: true,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 50,
                    },
                }}
                speed={2500}
                modules={[Autoplay]}
                className="logoSlider"
            >
                {
                    logos.map(logo =>
                        <SwiperSlide key={logo.id}>
                            <div className="w-25">
                                <img src={logo.image} alt="" />
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div >
        </div>
    );
}
