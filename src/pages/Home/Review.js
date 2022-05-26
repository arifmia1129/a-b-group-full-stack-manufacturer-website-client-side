import React from 'react';
import { AiFillStar } from 'react-icons/ai';
const Review = ({ singleReview, index }) => {
    const { userName, rating, review } = singleReview;
    let bgColor;
    if (index % 2 === 0) {
        bgColor = "bg-primary";
    }
    else {
        bgColor = "bg-secondary";
    }
    const { reviewer, reviewText } = review;
    return (

        <div className={`card ${bgColor} mx-2 md:w-96 w-48 h-full text-white`}>
            <div className="card-body">
                <h2 className="card-title underline">{userName}</h2>
                <div className="flex justify-end">
                    <p>Rating: {rating} star</p>
                </div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;