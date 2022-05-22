import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
const Card = ({ card }) => {
    const { color, title, description } = card;
    return (
        <div>
            <div class={`card ${color} text-white h-full`}>
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">
                        <BiRightArrow />
                        {title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;