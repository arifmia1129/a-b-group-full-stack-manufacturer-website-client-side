import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from "../../api/axiosPrivate";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const { image, imgLink, name, des, minimum, quantity, price } = data;
        if ((image[0] && imgLink) || image[0]) {
            const formData = new FormData();
            formData.append('image', image[0]);

            fetch(`https://api.imgbb.com/1/upload?expiration=600&key=9c1c8b6fefa135346f18195e686948e6`, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(result => {
                    if (result.data.url) {
                        const productInfo = {
                            name, des, minimum, quantity, price, img: result.data.url
                        };
                        axiosPrivate.post("http://localhost:5000/product", productInfo)
                            .then(res => {
                                if (res.data.acknowledged && res.data.insertedId)
                                    toast.success("Successfully product added!")
                            })
                    }
                })
        }

        else if (imgLink) {
            const productInfo = {
                name, des, minimum, quantity, price, img: imgLink
            };
            axiosPrivate.post("http://localhost:5000/product", productInfo)
                .then(res => {
                    if (res.data.acknowledged && res.data.insertedId)
                        toast.success("Successfully product added!")
                })
        }
        else {
            toast.error("Image field is empty!")
        }


    };
    return (
        <div >
            <div className='lg:px-72'>
                <h3 className="text-2xl text-primary font-bold mb-2">Add a new product:</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control  max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input
                            {...register("image", {


                            })}
                            type="file" placeholder="Enter product name" className="input input-bordered max-w-xs pt-2 text-sm" />

                    </div>
                    <div className="form-control  max-w-xs">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input
                            {...register("imgLink", {

                            })}
                            type="text" placeholder="Enter image link here" className="input input-bordered max-w-xs" />

                    </div>
                    <div className="form-control  max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input

                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name field is required'
                                },

                            })}
                            type="text" placeholder="Enter product name" className="input input-bordered max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors?.name?.message}
                            </span>
                        </label>
                    </div>
                    <div className="form-control  max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input

                            {...register("des", {
                                required: {
                                    value: true,
                                    message: 'Description field is required'
                                },

                            })}
                            type="text" placeholder="Enter product description" className="input input-bordered max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors?.des?.message}
                            </span>
                        </label>
                    </div>
                    <div className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </label>
                        <input

                            {...register("minimum", {
                                required: {
                                    value: true,
                                    message: 'Minimum quantity field is required'
                                },

                            })}
                            type="number" placeholder="Enter minimum quantity" className="input input-bordered max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors?.minimum?.message}
                            </span>
                        </label>
                    </div>
                    <div className="form-control  max-w-xs">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input

                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Available quantity field is required'
                                },

                            })}
                            type="number" placeholder="Enter available quantity" className="input input-bordered max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors?.quantity?.message}
                            </span>
                        </label>
                    </div>
                    <div className="form-control  max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input

                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price field is required'
                                },

                            })}
                            type="number" placeholder="Enter product price" className="input input-bordered max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors?.price?.message}
                            </span>
                        </label>
                    </div>
                    <input className='btn btn-primary font-bold text-white max-w-xs w-full' disabled={errors?.quantity?.message} type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;