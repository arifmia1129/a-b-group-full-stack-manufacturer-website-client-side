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
                <label onClick={handleCancel} for="my-modal" class="btn btn-xs btn-error text-white font-bold modal-button">Cancel</label>}</td>
        </tr>
    );
};

export default Order;