import React from 'react';
import Banner from '../../Components/Banner';
import OfficeFurnitures from '../OfficeCategory/OfficeFurnitures';
import Categories from '../../Components/Categories';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OfficeFurnitures></OfficeFurnitures>
            <Categories />
        </div>
    );
};

export default Home;