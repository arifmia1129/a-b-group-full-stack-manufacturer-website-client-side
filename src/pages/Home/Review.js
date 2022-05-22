import React from 'react';

const Review = ({ review, index }) => {
    let bgColor;
    if (index % 2 === 0) {
        bgColor = "bg-primary";
    }
    else {
        bgColor = "bg-secondary";
    }
    const { reviewer, reviewText } = review;
    return (
        <div class={`card ${bgColor} mx-2 w-48 text-white`}>
            <div class="card-body">
                <h2 class="card-title">{reviewer}</h2>
                <p>{reviewText}</p>
            </div>
        </div>
    );
};

export default Review;