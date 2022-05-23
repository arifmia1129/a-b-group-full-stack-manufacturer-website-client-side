import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        if (user || gUser) {
            navigate("/");
        }
    }, [user, gUser, navigate])

    if (loading || gLoading || updating) {
        return <Spinner />
    }

    const onSubmit = async data => {
        const { name, email, password } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        reset();
    };
    return (
        <div className='mt-10'>
            <div class="card w-full lg:w-96 mx-auto shadow-xl">
                <div class="card-body p-3 md:p-10">
                    <h3 className="text-2xl text-primary font-bold text-center">Register</h3>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control  max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name field is required'
                                    }
                                })}
                                type="text" placeholder="Enter your full name" class="input input-bordered  max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">
                                    {errors?.name?.message}
                                </span>
                            </label>
                        </div>
                        <div class="form-control  max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email field is required'
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Enter a valid email'
                                    }
                                })}
                                type="email" placeholder="Enter your valid email" class="input input-bordered  max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">
                                    {errors?.email?.message}
                                </span>
                            </label>
                        </div>
                        <div class="form-control  max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password field is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 character or longer"
                                    }

                                })}
                                type="password" placeholder="Enter password" class="input input-bordered  max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">
                                    {errors?.password?.message}
                                </span>
                            </label>
                        </div>

                        <input className='input input-bordered w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary cursor-pointer text-white border-0' type="submit" value="Register" />
                    </form>
                    <p className='text-center'><small>Already have an account? <Link to="/login"><span className='text-primary font-bold'>Login now!</span></Link></small></p>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline btn-success hover:bg-gradient-to-r from-secondary to-primary'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;