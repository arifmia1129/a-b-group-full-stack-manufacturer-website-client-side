import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
const Card = ({ card }) => {
    const { color, title, description } = card;
    return (
        <div>
            <div className={`card ${color} text-white h-full`}>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">
                        <BiRightArrow />
                        {title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;