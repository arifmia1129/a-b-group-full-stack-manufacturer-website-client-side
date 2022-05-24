import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import Order from './Order';

const MyOrders = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [bookingProducts, setBookingProduct] = useState([]);
    useEffect(() => {
        const getBookingProducts = async () => {
            try {
                const { data } = await axiosPrivate.get(`http://localhost:5000/booking?email=${user?.email}`);
                setBookingProduct(data);
            }
            catch (error) {
                if (error?.response?.status === 401 || 403) {
                    signOut(auth);
                    localStorage.removeItem("token");
                    navigate("/login");
                }
            }
        }
        getBookingProducts();
    }, [user])
    if (loading) {
        return <Spinner />
    }
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