import React from 'react';
import Card from './Card';

const Cards = () => {
    const cards = [
        { _id: 1, title: "Quality Product", description: "We have no compromise with quality. That's why we only give you 100% quality products.", color: "bg-primary" },
        { _id: 2, title: "Certified", description: "All our products are certified by the Bangladesh University of Engineering and Technology (BUET). In this way, there is no possibility of any defect in our product.", color: "bg-secondary" },
        { _id: 1, title: "Money Back Guarantee", description: "If you find any defects in our products, we will refund you immediately without any condition. So you can safely take any of our products.", color: "bg-accent" },
    ]
    return (
        <div className='my-20'>
            <h3 className='font-bold text-primary text-2xl mb-2'>Our Commitment:</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    cards.map(card => <Card
                        key={card._id}
                        card={card}
                    />)
                }
            </div>
        </div>
    );
};

export default Cards;