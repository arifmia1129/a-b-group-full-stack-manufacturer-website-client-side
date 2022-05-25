import React from 'react';
import { useParams } from 'react-router-dom';
import useBooking from "../../hooks/useBooking";
import CheckoutForm from "./CheckoutForm";
import Spinner from "../Shared/Spinner";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51L0drqHjlyVvU0H8WCq85L5S01GNgzi6FPnNqOCaYjqhSDHM985EIVLVhiw6nFnMCGSQDYowAf8tPHF1qhtBvNzh0071TRQkRm');

const Payment = () => {
    const { id } = useParams();
    const { bookingProduct, refetch, isLoading } = useBooking(id);

    if (isLoading) {
        return <Spinner />
    }
    const { productId,
        product,
        orderQuantity,
        totalPrice,
        user,
        name,
        phone,
        address } = bookingProduct;
    return (
        <div>
            <div class="card w-full md:w-96 border-2 mx-auto">
                <div class="card-body">
                    <h2 class="card-title underline">Product & Customer details:</h2>
                    <p><span className="font-bold">Product:</span> {product}</p>
                    <p><span className="font-bold">Quantity:</span> {orderQuantity}</p>
                    <p><span className="font-bold">Total Price:</span> {totalPrice}</p>
                    <p><span className="font-bold">Customer:</span> {name}</p>
                    <p><span className="font-bold">Email:</span> {user}</p>
                    <p><span className="font-bold">Phone:</span> {phone}</p>
                    <p><span className="font-bold">Address:</span> {address}</p>
                </div>
            </div>
            <div className='w-full md:w-96 border-2 p-1 lg:p-5 mx-auto my-5 rounded-lg'>
                <h2 class="card-title underline mb-5">Confirm your payment:</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookingProduct={bookingProduct} />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;