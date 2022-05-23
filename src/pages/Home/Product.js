import React from 'react';
import { BiPurchaseTag } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    const { img, name, des, minimum, quantity, price, _id } = product;
    const navigate = useNavigate();
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-80' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{des}</p>
                <div className='border-2  p-1 rounded-lg'>
                    <p><span className='font-bold'>Available Quantity:</span> {quantity}(minimum)</p>
                    <p><span className='font-bold'>Order Quantity:</span> {minimum}(minimum)</p>
                    <p><span className='font-bold'>Price:</span> {price}(per product)</p>
                </div>
                <div class="card-actions">
                    <button onClick={() => navigate(`/purchase/${_id}`)} class="btn bg-gradient-to-r from-secondary to-primary w-full border-0 text-white">
                        Purchase Now
                        <BiPurchaseTag className='text-xl ml-1' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;