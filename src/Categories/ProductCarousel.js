import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../Components/components.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductCarousel({product}) {
    // console.log(product)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const slides = [
        { image: "https://i.ibb.co/xY2btD9/Solid-Engineered-Wooden-Door.png" },
        { image: "https://i.ibb.co/w0H2fNn/Knock-down-door-frame.png" },
        { image: "https://i.ibb.co/TvcwW97/Plain-Veneered-Flush-Door.png" },
        { image: "https://i.ibb.co/K9xccpj/Decorative-Veneered-Glass-Door.png" },
        { image: "https://i.ibb.co/Qcwd1Gq/Decorative-Veneered-Flush-Door.png" },
        { image: "https://i.ibb.co/dGKYR3C/Solid-Wooden-Glass-Door.png" },
    ]

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                {
                    slides.map((slide, index) =>
                        <SwiperSlide key={index}>
                            <img src={product.image} alt='' />
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper Thumbnail"
            >
                {
                    slides.map((slide, index) =>
                        <SwiperSlide key={index}>
                            <img src={product.image} alt='' />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
