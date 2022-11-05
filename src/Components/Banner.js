import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./components.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Box from '@mui/material/Box';
import { Container, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Banner = () => {
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

  const banner = [
    {
      "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/d75pqB1/image2.jpg"
    },
    {
      "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/XJhhtz6/image3.jpg"
    },
    {
      "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/CWK0qkP/image1.jpg"
    },
  ]


  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper
        onInit={onInit}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          banner.map((item, index) =>
            <div>
              <SwiperSlide key={index}>
                <div style={{ width: '100%' }}>
                  <div className="lg:flex lg:flex-row-reverse mb-5 items-center"
                  >
                    <img className="mb-5 lg:mb-0" src={item.image} alt="" style={{ width: '100vh', height: '80vh' }} />
                    <Container maxWidth="sm " >
                      <Typography sx={{ fontSize: '20px', fontWeight: '500', mb: 4, textAlign: 'left' }}>{item.title}</Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'left',
                        }}
                      >
                        <button className="btn bg-primary hover:bg-accent text-white hover:border-1 rounded-full">
                          Explore More
                          <NavigateNextIcon />
                        </button>
                      </Box>
                    </Container>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          )
        }
      </Swiper>
    </div>
  );
};

export default Banner;
