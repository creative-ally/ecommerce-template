import React from 'react';
import Banner from '../../Components/Banner';
import OfficeFurnitures from '../OfficeCategory/OfficeFurnitures';
import Categories from '../../Components/Categories';
import Newsletter from './Newsletter';
import InteriorFurnitures from '../InteriorCategory/InteriorFurnitures';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OfficeFurnitures></OfficeFurnitures>
            <InteriorFurnitures/>
            <Categories />
            <Newsletter/>
        </div>
    );
};

export default Home;