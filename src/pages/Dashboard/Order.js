import React from 'react';
import { useNavigate } from "react-router-dom";
const Order = ({ bookingProduct, index, setCancelProduct }) => {
    const navigate = useNavigate();
    const { product, orderQuantity, totalPrice, _id, status, tnxId } = bookingProduct;
    const handleCancel = () => {
        setCancelProduct(bookingProduct);
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{orderQuantity}</td>
            <td>{totalPrice}</td>
            <td>{(!status && !tnxId) ?
                <>
                    <div className="flex justify-center items-center">
                        <div>
                            <label onClick={handleCancel} for="my-modal" class="btn btn-xs btn-accent text-white font-bold modal-button">Cancel</label>
                            <button onClick={() => navigate(`/payment/${_id}`)} className='btn btn-error btn-xs ml-2 font-bold text-white mx-auto'>Pay</button>
                        </div>
                    </div>
                </>
                :
                <>
                    <p className='text-orange-700 border p-1 text-center w-72 mx-auto'>
                        <small>{status}, tnx: {tnxId}</small>
                    </p>
                </>
            }
            </td>
        </tr>
    );
};

export default Order;