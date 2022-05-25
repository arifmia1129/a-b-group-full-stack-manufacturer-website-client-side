import React from 'react';
import { useParams } from 'react-router-dom';
import useBooking from "../../hooks/useBooking";
const Payment = () => {
    const {id} = useParams();
    const {bookingProduct, refetch} = useBooking(id);
    const {productId,
        product,
        orderQuantity,
        totalPrice,
        user,
        name,
        phone,
        address} = bookingProduct;
    return (
        <div>
            <div class="card w-96 border-2">
                <div class="card-body">
                    <h2 class="card-title">Product & Customer details:</h2>
                    <p>Product: {product}</p>
                    <p>Quantity: {orderQuantity}</p>
                    <p>Total Price: {totalPrice}</p>
                    <p>Customer: {name}</p>
                    <p>Email: {user}</p>
                    <p>Phone: {phone}</p>
                    <p>Address: {address}</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;