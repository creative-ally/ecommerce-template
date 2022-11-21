import React from 'react';
import Banner from './Banner';
import Categories from '../../Components/Categories';
import Newsletter from './Newsletter';
import LogoSlider from './LogoSlider';
// import OfficeFurnitures from './OfficeCategory/OfficeFurnitures';

const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <OfficeFurnitures/> */}
            <Categories />
            <LogoSlider/>
            <Newsletter/>
        </div>
    );
};

export default Home;