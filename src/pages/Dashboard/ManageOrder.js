import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';

const ManageOrder = ({ bookingProduct, index, refetch, setDeleteProduct }) => {
    const { product, orderQuantity, totalPrice, status, tnxId, _id } = bookingProduct;
    const handleShip = () => {
        axiosPrivate.put(`http://localhost:5000/booking/${_id}`, { status: "shipped" })
            .then(res => {
                if (res.data.acknowledged && res.data.matchedCount) {
                    toast.success("Status update! Status now: shipped!")
                    refetch();
                }
            })
    }
    const handleUnShip = () => {
        axiosPrivate.put(`http://localhost:5000/booking/${_id}`, { status: "pending" })
            .then(res => {
                if (res.data.acknowledged && res.data.matchedCount) {
                    toast.success("Status update! Status now: pending!")
                    refetch();
                }
            })
    }
    const handleDelete = () => {
        setDeleteProduct(bookingProduct);
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{orderQuantity}</td>
            <td>{totalPrice}</td>
            <td>{(!status && !tnxId) ?
                <>
                    <div className='flex justify-center items-center'>
                        <p className='text-white font-bold rounded-lg bg-orange-500 border p-1 text-center w-fit'>
                            <small>unpaid</small>
                        </p>
                        <label onClick={handleDelete} htmlFor="confirm-delete-modal" className="btn btn-xs btn-accent text-white font-bold modal-button">Delete</label>

                    </div>
                </>
                :
                <>
                    <div className='flex justify-center items-center'>
                        <p className='text-white font-bold rounded-lg bg-green-400 border p-1 text-center'><small>{status}</small></p>
                        <br />
                        {status === "pending" && <button onClick={handleShip} className="btn btn-error btn-xs font-bold text-white ml-1"><small>Ship Now!</small></button>}
                        {status === "shipped" && <button onClick={handleUnShip} className="btn btn-error btn-xs font-bold text-white ml-1"><small>Unship!</small></button>}
                    </div>

                </>
            }
            </td>
        </tr >
    );
};

export default ManageOrder;