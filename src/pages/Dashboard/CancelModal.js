import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';

const CancelModal = ({ cancelProduct, setCancelProduct, refetch }) => {
    const { orderQuantity, productId, _id } = cancelProduct;
    const { isLoading, data: product } = useQuery(['product', productId], () =>
        fetch(`https://enigmatic-reef-93908.herokuapp.com/product/${productId}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Spinner />
    }
    const handleCancel = () => {
        const updateQuantity = () => {
            fetch(`https://enigmatic-reef-93908.herokuapp.com/product/${productId}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ quantity: (parseInt(product?.quantity) + parseInt(orderQuantity)) })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setCancelProduct(null);
                        refetch();
                        toast.success("Order cancel success!")
                    }
                })
        }

        fetch(`https://enigmatic-reef-93908.herokuapp.com/booking/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },

        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    updateQuantity();
                }
            })


    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Are you sure cancel this order?</h3>
                    <p className="py-4">This order is permanently delete from your dashboard and database. You can't access this!</p>
                    <div className="modal-action">
                        <label onClick={handleCancel} htmlFor="my-modal" className="btn btn-error text-white font-bold">Yes</label>
                        <label onClick={() => setCancelProduct(null)} htmlFor="my-modal" className="btn btn-success text-white font-bold">No</label>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default CancelModal;