import React from 'react';

const ManageProduct = ({ product, index, setDeleteProduct }) => {
    const { _id, name, quantity } = product;
    const handleDelete = () => {
        setDeleteProduct(product);
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={handleDelete} for="delete-modal" class="btn btn-xs btn-accent text-white font-bold modal-button">Delete</label>
            </td>

        </tr>
    );
};

export default ManageProduct;