import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import Review from './Review';
import axiosPrivate from "../../api/axiosPrivate";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const { data } = await axiosPrivate.get("https://enigmatic-reef-93908.herokuapp.com/review");
            setReviews(data);
        }
        getReviews();
    }, [])


    if (reviews.length) {
        const newReviews = [];
        let n = 6;
        let length = reviews.length;
        for (length; 0 < length; length--) {
            newReviews.push(reviews[length - 1]);
            n--;
            if (n === 0) {
                setReviews(newReviews);
                break;
            }
        }
    }
    return (
        <div className='my-10'>
            <h3 className='font-bold text-primary text-2xl mb-2'>Customer Reviews:</h3>
            <Marquee gradient={false}>
                {
                    (reviews?.map)((singleReview, index) => <Review
                        key={singleReview._id}
                        singleReview={singleReview}
                        index={index}
                    />)
                }
            </Marquee>
        </div>
    );
};

export default Reviews;