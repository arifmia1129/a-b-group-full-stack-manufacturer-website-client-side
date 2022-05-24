import React from 'react';

const Order = ({ bookingProduct, index }) => {
    const { product, orderQuantity, totalPrice } = bookingProduct;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{orderQuantity}</td>
            <td>{totalPrice}</td>
            <td>{totalPrice}</td>
        </tr>
    );
};

export default Order;