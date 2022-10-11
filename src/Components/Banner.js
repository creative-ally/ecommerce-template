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
import { Button, Container, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Banner = () => {
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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          banner.map((item, index) =>
            <SwiperSlide key={index}>
              <div style={{ width: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    bgcolor: 'background.paper',
                    alignItems: 'center'
                  }}
                >
                  <Container maxWidth="sm">
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold', mb: 2 }}>{item.title}</Typography>
                    <Button variant="contained" disableElevation>
                      Explore More
                      <NavigateNextIcon />
                    </Button>
                  </Container>
                  <img src={item.image} alt="" style={{width: '100vh', height:'80vh'}}/>
                </Box>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
};

export default Banner;
