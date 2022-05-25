import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Spinner from "../../pages/Shared/Spinner";
import axiosPrivate from "../../api/axiosPrivate";
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    if(loading) {
        return <Spinner/>
    }
    const onSubmit = data => {
        data.userName = user?.displayName;
        data.userEmail = user?.email;
        axiosPrivate.post("http://localhost:5000/review", data)
        .then(res => {
            if(res.data.acknowledged && res.data.insertedId) {
                toast.success("Your review is added. Thank you!")
            }
        })
        reset();
    };
    return (
        <div className="flex justify-center">
            <div>
            <h3 className="text-2xl text-primary font-bold mb-2 ">Add review about our product:</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control  max-w-xs">
                                <label class="label">
                                    <span class="label-text">Rating Stars</span>
                                </label>
                                <input

                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: 'Rating stars field is required'
                                        },
                                        max: {
                                            value: 5,
                                            message: `Maximum value is 5`
                                        },
                                        min: {
                                            value: 1,
                                            message: `Minimum value is 1`
                                        },
                                    })}
                                     type="number" placeholder="Rating stars" class="input input-bordered  max-w-xs" />
                                <label class="label">
                                    <span class="label-text-alt text-red-500">
                                        {errors?.rating?.message}
                                    </span>
                                </label>
                            </div>
                            <div class="form-control  max-w-xs">
                                <label class="label">
                                    <span class="label-text">Review</span>
                                </label>
                                <textarea

                                    {...register("review", {
                                        required: {
                                            value: true,
                                            message: 'Email field is required'
                                        },
                                        maxLength: {
                                            value: 250,
                                            message: `Maximum length is 250`
                                        },
                                        minLength: {
                                            value: 10,
                                            message: `Minimum length is 10`
                                        },
                                    })}
                                     type="text" placeholder="Add your review" class="input input-bordered  max-w-xs" />
                                <label class="label">
                                    <span class="label-text-alt text-red-500">
                                        {errors?.review?.message}
                                    </span>
                                </label>
                            </div>
                            <input className='btn btn-primary font-bold text-white w-full' type="submit" value="Submit Review" />
                        </form>
            </div>
        </div>
    );
};

export default AddReview;