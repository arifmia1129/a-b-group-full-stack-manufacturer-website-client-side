import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';

const CancelModal = ({ cancelProduct, setCancelProduct, refetch }) => {
    const { orderQuantity, productId, _id } = cancelProduct;
    const { isLoading, data: product } = useQuery(['product', productId], () =>
        fetch(`http://localhost:5000/product/${productId}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Spinner />
    }
    const handleCancel = () => {
        const updateQuantity = () => {
            fetch(`http://localhost:5000/product/${productId}`, {
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

        fetch(`http://localhost:5000/booking/${_id}`, {
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
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-error">Are you sure cancel this order?</h3>
                    <p class="py-4">This order is permanently delete from your dashboard and database. You can't access this!</p>
                    <div class="modal-action">
                        <label onClick={handleCancel} for="my-modal" class="btn btn-error text-white font-bold">Yes</label>
                        <label onClick={() => setCancelProduct(null)} for="my-modal" class="btn btn-success text-white font-bold">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;