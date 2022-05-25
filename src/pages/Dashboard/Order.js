import React from 'react';
import {useNavigate} from "react-router-dom";
const Order = ({ bookingProduct, index, setCancelProduct }) => {
    const navigate = useNavigate();
    const { product, orderQuantity, totalPrice, paid, _id } = bookingProduct;
    const handleCancel = () => {
        setCancelProduct(bookingProduct);
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{orderQuantity}</td>
            <td>{totalPrice}</td>
            <td>{!paid &&
                <>
                    <label onClick={handleCancel} for="my-modal" class="btn btn-xs btn-accent text-white font-bold modal-button">Cancel</label>
                    <button onClick={()=> navigate(`/payment/${_id}`)} className='btn btn-error btn-xs ml-2 font-bold text-white'>Pay</button>
                </>
            }
            </td>
        </tr>
    );
};

export default Order;