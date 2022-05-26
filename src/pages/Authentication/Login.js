import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Spinner from '../Shared/Spinner';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm();
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
    const [token] = useToken(user || gUser);
    let errorMessage;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, token, navigate])

    if (error || gError || rError) {
        errorMessage = <p className='text-red-500'>{error?.message.split(":")[1] || gError?.message.split(":")[1] || rError?.message.split(":")[1]}</p>
    }


    if (loading || gLoading || sending) {
        return <Spinner />
    }


    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        reset();
    };
    const resetPass = async () => {
        errorMessage = ""
        const email = getValues("email")
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Email send for password reset!")
        }
        else {
            toast.error("Enter a valid email!")
        }

    }
    return (
        <div className='mt-10'>
            <div className="card w-full lg:w-96 mx-auto shadow-xl">
                <div className="card-body p-3 md:p-10">
                    <h3 className="text-2xl text-primary font-bold text-center">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control  max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
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

                                type="email" placeholder="Enter your valid email" className="input input-bordered  max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">
                                    {errors?.email?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control  max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
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
                                type="password" placeholder="Enter password" className="input input-bordered  max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">
                                    {errors?.password?.message}
                                </span>
                            </label>
                        </div>

                        <div>
                            {
                                errorMessage && <label className="label">
                                    <span className="label-text-alt text-red-500">
                                        {errorMessage}
                                    </span>
                                </label>
                            }
                        </div>
                        <div>
                            <input className='input input-bordered w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary cursor-pointer text-white border-0' type="submit" value="Login" />
                        </div>
                    </form>
                    <button onClick={resetPass} className="text-primary font-bold">
                        <small>Password reset?</small>
                    </button>
                    <p className='text-center'><small>Are you new in A&B Group? <Link to="/register"><span className='text-primary font-bold'>Register now!</span></Link></small></p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline btn-success hover:bg-gradient-to-r from-secondary to-primary'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;