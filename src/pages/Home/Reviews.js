import React from 'react';
import Marquee from "react-marquee-slider";
import Review from './Review';

const Reviews = () => {
    const reviews = [
        { _id: 1, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 1, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 1, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 2, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 3, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 4, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 5, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 6, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 7, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 8, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 9, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
        { _id: 10, reviewer: "Arif", reviewText: "Good product. So you will try with them. Thank you." },
    ]
    const newReviews = [];
    let n = 6;
    let length = reviews.length;
    for (length; 0 < length; length--) {
        newReviews.push(reviews[length - 1]);
        n--;
        if (n === 0) {
            break;
        }
    }
    return (
        <div className='my-10'>
            <h3 className='font-bold text-primary text-2xl mb-2'>Customer Reviews:</h3>
            <Marquee>
                {
                    newReviews.map((review, index) => <Review
                        key={review._id}
                        review={review}
                        index={index}
                    />)
                }
            </Marquee>
        </div>
    );
};

export default Reviews;