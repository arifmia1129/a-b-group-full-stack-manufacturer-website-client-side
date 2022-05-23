import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, rError] = useSendPasswordResetEmail(
        auth
    );

    let errorMessage;
    const emailRef = useRef("");

    if (error || gError || rError) {
        errorMessage = <p className='text-red-500'>{error?.message.split(":")[1] || gError?.message.split(":")[1] || rError?.message.split(":")[1]}</p>
    }
    if (loading || gLoading || sending) {
        return <Spinner />
    }
    if (user || gUser) {
        console.log(user || gUser);
    }

    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        reset();
    };
    const resetPass = async () => {
        const email = await emailRef?.current?.value
        await sendPasswordResetEmail(email);
        toast.success("Email send for password reset!")
    }
    return (
        <div className='mt-10'>
            <div class="card w-full lg:w-96 mx-auto shadow-xl">
                <div class="card-body p-3 md:p-10">
                    <h3 className="text-2xl text-primary font-bold text-center">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                ref={emailRef}
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
                                        message: "6 character or longer"
                                    }

                                })}
                                type="password" placeholder="Enter password" class="input input-bordered  max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">
                                    {errors?.password?.message}
                                </span>
                                <span>
                                    <button onClick={resetPass} class="text-primary font-bold">
                                        <small>Password reset?</small>
                                    </button>
                                </span>
                            </label>
                        </div>

                        <div>
                            {
                                errorMessage && <label class="label">
                                    <span class="label-text-alt text-red-500">
                                        {errorMessage}
                                    </span>
                                </label>
                            }
                        </div>
                        <div>
                            <input className='input input-bordered w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary cursor-pointer text-white border-0' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'><small>Are you new in A&B Group? <Link to="/register"><span className='text-primary font-bold'>Register now!</span></Link></small></p>

                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline btn-success hover:bg-gradient-to-r from-secondary to-primary'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;