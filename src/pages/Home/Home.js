import React from 'react';
import BusinessSummary from './BusinessSummary';
import Cards from './Cards';
import HomeBanner from './HomeBanner';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Cards />
            <Products />
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;