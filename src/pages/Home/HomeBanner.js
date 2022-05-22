import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/banner-1.jpg";

const HomeBanner = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse h-[80vh]">
                <div className='flex-1 flex justify-center items-center'>
                    <img src={bannerImg} class="w-full rounded-lg shadow-2xl" alt='hero' />
                </div>
                <div className='flex-1'>
                    <h1 class="text-xl md:text-5xl font-bold">We want to give you the best product to be your loyalty.</h1>
                    <p class="py-6">We guarantee you world-class products. We want to be satisfied with our products and meet the needs of the next customer. We want to work for you, for the society, and the country at large.</p>
                    <Link to="/about"><button class="btn btn-primary font-bold text-white">About Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;