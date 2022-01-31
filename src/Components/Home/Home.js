import React from 'react';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Products></Products>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;