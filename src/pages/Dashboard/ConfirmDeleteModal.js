import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';

const ConfirmDeleteModal = ({ refetch, setDeleteProduct, deleteProduct }) => {
    const { _id } = deleteProduct;
    const handleDelete = () => {
        axiosPrivate.delete(`https://enigmatic-reef-93908.herokuapp.com/booking/${_id}`)
            .then(res => {
                if (res.data.acknowledged && res.data.deletedCount) {
                    toast.success("Delete operation success!")
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="confirm-delete-modal" className="modal-toggle" />
            <div className="modal border-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Are you sure delete this product?</h3>
                    <p className="py-4">This order is permanently delete from database. You can't access this!</p>
                    <div className="modal-action">
                        <label onClick={handleDelete} htmlFor="confirm-delete-modal" className="btn btn-error text-white font-bold">Yes</label>
                        <label onClick={() => setDeleteProduct(null)} htmlFor="confirm-delete-modal" className="btn btn-success text-white font-bold">No</label>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ConfirmDeleteModal;