import React from 'react';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import Cards from './Cards';
import HomeBanner from './HomeBanner';
import Products from './Products';
import Reviews from './Reviews';
import UserSubscribe from './UserSubscribe';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Cards />
            <Products />
            <BusinessSummary />
            <Reviews />
            <UserSubscribe />
            <Footer />
        </div>
    );
};

export default Home;