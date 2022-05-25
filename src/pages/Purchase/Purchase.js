import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import { toast } from 'react-toastify';
import useProduct from "../../hooks/useProduct";


const Purchase = () => {
    const [userStatus, setUserStatus] = useState("");
    const [quantityStatus, setQuantityStatus] = useState("");
    const [orderConfirmStatus, setOrderConfirmStatus] = useState("");
    const [user, loading] = useAuthState(auth);
    const { displayName, email } = user;
    const { id } = useParams();
    const [orderQuantity, setOrderQuantity] = useState(0);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        setOrderQuantity(data.quantity);
        reset();
        setQuantityStatus("step-primary");
    };
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const handleUser = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        setPhone(phone);
        const address = e.target.address.value;
        setAddress(address);
        e.target.reset();
        setUserStatus("step-primary");
    }
    const {product, refetch, isLoading} = useProduct(id);
   
    if (loading || isLoading) {
        return <Spinner />
    }
    const { img, name, quantity, minimum, price, des } = product;

    const confirmOrder = async () => {
        if (phone && address && orderQuantity) {

            const bookingInfo = {
                productId: id,
                product: name,
                orderQuantity,
                totalPrice: (orderQuantity * price),
                user: email,
                name: displayName,
                phone,
                address
            }
            const booking = () => {
                fetch(`http://localhost:5000/booking`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(bookingInfo)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.acknowledged && result.insertedId) {
                            toast.success("Your order is booked!");
                            refetch();
                            setOrderConfirmStatus("step-primary");
                        }
                    })
            }

            fetch(`http://localhost:5000/product/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ quantity: (quantity - orderQuantity) })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged && data.modifiedCount) {
                        booking();
                    }

                })

        }
        if (!phone || !address || !orderQuantity) {
            toast.error("Phone or Address or Quantity info is missing")
        }
    }

    return (
        <div>
            <div className="sticky top-20 bg-base-100">
            <ul class="steps steps-vertical lg:steps-horizontal w-full">
                <li class={`step ${userStatus}`}>Submit User Info</li>
                <li class={`step ${quantityStatus}`}>Confirm Quantity</li>
                <li class={`step ${orderConfirmStatus}`}>Confirm Order</li>
            </ul>
            </div>
            <div className='border-4 p-5 rounded-lg'>
                <h3 className="text-2xl text-primary font-bold mb-2">Basic Information for Purchase:</h3>
                <div class="">
                    <div className='flex justify-center items-center'>
                        <figure><img className='h-52' src={img} alt="" /></figure>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <h2 className='text-xl font-bold'>{name}</h2>
                            <p>{des}</p>
                            <div className='border-2  p-1 rounded-lg'>
                                <p><span className='font-bold'>Available Quantity:</span> {quantity}</p>
                                <p><span className='font-bold'>Order Quantity:</span> {minimum}(minimum)</p>
                                <p><span className='font-bold'>Price:</span> {price}(per product)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-around items-center my-10'>
                <div class="card md:w-96 w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 className="text-2xl text-primary font-bold">Order for:</h3>
                        <p>Name: {displayName}</p>
                        <p>Email: {email}</p>
                        {phone && <p>Phone: {phone}</p>}
                        {address && <p>Email: {address}</p>}
                        <form onSubmit={handleUser}>
                            <div class="form-control  max-w-xs">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input
                                    name="phone" required type="text" placeholder="Enter phone number" class="input input-bordered  max-w-xs" />
                            </div>
                            <div class="form-control  max-w-xs">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input
                                    name="address" required type="text" placeholder="Enter current address" class="input input-bordered  max-w-xs" />
                            </div>
                            <input className='btn btn-primary font-bold text-white mt-5' type="submit" />
                        </form>
                    </div>
                </div>
                <div class="card w-full md:w-96 bg-base-100 shadow-xl mt-5 lg:mt-0">
                    <div class="card-body">
                        <h3 className="text-2xl text-primary font-bold">Order Information: </h3>
                        <p className='text-xl text-secondary font-bold'>Order Quantity: {orderQuantity}</p>
                        <p className='text-xl text-secondary font-bold'>Total price: {orderQuantity * price}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control  max-w-xs">
                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input

                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Email field is required'
                                        },
                                        max: {
                                            value: `${quantity}`,
                                            message: `Maximum quantity is ${quantity}`
                                        },
                                        min: {
                                            value: `${minimum}`,
                                            message: `Minimum quantity is ${minimum}`
                                        },
                                    })}
                                    defaultValue={minimum} type="number" placeholder="Enter product quantity" class="input input-bordered  max-w-xs" />
                                <label class="label">
                                    <span class="label-text-alt text-red-500">
                                        {errors?.quantity?.message}
                                    </span>
                                </label>
                            </div>
                            <input className='btn btn-primary font-bold text-white' disabled={errors?.quantity?.message} type="submit" value="Confirm Quantity" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={confirmOrder} className='btn btn-error font-fold text-white rounded-lg border-0'>Confirm Order</button>
            </div>
        </div>
    );
};

export default Purchase;