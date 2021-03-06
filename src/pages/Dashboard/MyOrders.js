import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import CancelModal from './CancelModal';
import Order from './Order';

const MyOrders = () => {
    const navigate = useNavigate();
    const [cancelProduct, setCancelProduct] = useState(null);
    const [user, loading] = useAuthState(auth);

    const { isLoading, data: bookingProducts, refetch } = useQuery(['booking', user], () =>
        fetch(`https://enigmatic-reef-93908.herokuapp.com/booking?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem("token");
                navigate("/login");
            }
            return res.json()
        })
    )
    if (loading || isLoading) {
        return <Spinner />
    }
    return (
        <div >
            <h3 className="text-2xl text-primary font-bold mb-2">Your all orders:</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th className='text-center'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingProducts?.map((bookingProduct, index) => <Order
                            key={bookingProduct._id}
                            bookingProduct={bookingProduct}
                            index={index}
                            setCancelProduct={setCancelProduct}
                        />)
                    }
                </tbody>
            </table>
            {
                cancelProduct && <CancelModal
                    cancelProduct={cancelProduct}
                    setCancelProduct={setCancelProduct}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default MyOrders;