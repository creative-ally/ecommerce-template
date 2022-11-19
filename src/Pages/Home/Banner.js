import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./components.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Box from '@mui/material/Box';
import { Container, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'


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
      "image": `${image1}`
    },
    {
      "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": `${image2}`
    },
    {
      "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": `${image3}`
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
                    <Container maxWidth="sm" sx={{padding: '0 20vw'}}>
                      <Typography sx={{ fontSize: '20px', fontWeight: '500', mb: 4, textAlign: 'left', color: '#000000' }}>{item.title}</Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'left',
                        }}
                      >
                        <button className="btn button">
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
