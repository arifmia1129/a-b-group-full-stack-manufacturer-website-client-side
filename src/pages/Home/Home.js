import React from 'react';
import BusinessSummary from './BusinessSummary';
import Cards from './Cards';
import HomeBanner from './HomeBanner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Cards />
            <Products />
            <BusinessSummary />
        </div>
    );
};

export default Home;