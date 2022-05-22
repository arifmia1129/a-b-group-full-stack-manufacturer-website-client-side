import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
const Card = ({ card }) => {

    return (
        <div class={`card bg-${card.color} text-white`}>
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold">
                    <BiRightArrow />
                    {card.title}</h2>
                <p>{card.description}</p>
            </div>
        </div>
    );
};

export default Card;