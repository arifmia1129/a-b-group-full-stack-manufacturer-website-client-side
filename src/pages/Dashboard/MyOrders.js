import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import Order from './Order';

const MyOrders = () => {
    const [bookingProducts, setBookingProduct] = useState([]);
    useEffect(() => {
        const getBookingProducts = async () => {
            const { data } = await axiosPrivate.get("http://localhost:5000/booking");
            setBookingProduct(data);
        }
        getBookingProducts();
    }, [])
    return (
        <div class="overflow-x-auto w-full h-screen">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingProducts.map((bookingProduct, index) => <Order
                            key={bookingProduct._id}
                            bookingProduct={bookingProduct}
                            index={index}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;