import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';

const DeleteModal = ({ refetch, setDeleteProduct, deleteProduct }) => {
    const { _id } = deleteProduct;
    const handleDelete = () => {
        axiosPrivate.delete(`http://localhost:5000/product/${_id}`)
            .then(res => {
                if (res.data.acknowledged && res.data.deletedCount) {
                    toast.success("Delete operation success!")
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-error">Are you sure delete this product?</h3>
                    <p class="py-4">This order is permanently delete from database. You can't access this!</p>
                    <div class="modal-action">
                        <label onClick={handleDelete} for="delete-modal" class="btn btn-error text-white font-bold">Yes</label>
                        <label onClick={() => setDeleteProduct(null)} for="delete-modal" class="btn btn-success text-white font-bold">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;