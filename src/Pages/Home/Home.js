import React from 'react';
import Banner from '../../Components/Banner';
import Categories from '../../Components/Categories';
import Newsletter from './Newsletter';
// import OfficeFurnitures from './OfficeCategory/OfficeFurnitures';

const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <OfficeFurnitures/> */}
            <Categories />
            <Newsletter/>
        </div>
    );
};

export default Home;