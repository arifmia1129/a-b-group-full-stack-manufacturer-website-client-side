import React from 'react';
import Cards from './Cards';
import HomeBanner from './HomeBanner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Cards />
            <Products />
        </div>
    );
};

export default Home;