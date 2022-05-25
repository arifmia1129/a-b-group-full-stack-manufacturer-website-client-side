import React from 'react';

const Order = ({ bookingProduct, index, setCancelProduct }) => {
    const { product, orderQuantity, totalPrice, paid } = bookingProduct;
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
                    <button className='btn btn-error btn-xs ml-2 font-bold text-white'>Pay</button>
                </>
            }
            </td>
        </tr>
    );
};

export default Order;