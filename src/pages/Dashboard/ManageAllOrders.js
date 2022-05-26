import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import ManageOrder from './ManageOrder';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const ManageAllOrders = () => {
    const [user, loading] = useAuthState(auth);
    const { isLoading, data: bookingProducts, refetch } = useQuery('bookingProducts', () =>
        fetch(`http://localhost:5000/all-booking?email=${user?.email}&query=`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) {
        return <Spinner />
    }
    return (
        <div>
            <h3 className="text-2xl text-primary font-bold mb-2">Your all orders:</h3>
            <select name="" id="">
                <option value="{}">All</option>
                <option value="{status:'pending'}">Pending</option>
                <option value="{status:'ship'}">Pending</option>
            </select>
            <table class="table w-full">
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
                        bookingProducts?.map((bookingProduct, index) => <ManageOrder
                            key={bookingProduct._id}
                            bookingProduct={bookingProduct}
                            index={index}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;