import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
const Card = ({ card }) => {
    const { color, title, description } = card;
    return (
        <div class={`card bg-${color} text-white`}>
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold">
                    <BiRightArrow />
                    {title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;