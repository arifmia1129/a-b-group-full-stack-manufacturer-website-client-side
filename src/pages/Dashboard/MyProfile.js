import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Spinner from '../Shared/Spinner';
import axiosPrivate from "../../api/axiosPrivate";
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [editStatus, setEditStatus] = useState(false);

    const navigate = useNavigate();



    const { isLoading, data: currentUser, refetch } = useQuery(['profile', user], () =>
        fetch(`http://localhost:5000/user/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem("token");
                navigate("/login");
            }
            return res.json()
        })
    )
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        data.user = user?.displayName;
        axiosPrivate.put("http://localhost:5000/user", data)
            .then(res => {
                if (res.data.result.acknowledged && res.data.result.modifiedCount) {
                    refetch();
                    reset();
                    setEditStatus(false);
                    toast.success("Successfully profile updated!");
                }
            })
    };
    if (loading || isLoading) {
        return <Spinner />
    }
    const { education, phone, address, linkedin } = currentUser;

    return (
        <div>
            <div className='border-2 p-5 rounded-lg my-5'>
                <h3 className="text-2xl text-primary font-bold mb-2 ">Your profile:</h3>
                <p><span className='font-bold'>Name:</span> {user?.displayName}</p>
                <p><span className='font-bold'>Email:</span> {user?.email}</p>
                {phone && <p><span className='font-bold'>Phone:</span> {phone}</p>}
                {address && <p><span className='font-bold'>Address:</span> {address}</p>}
                {education && <p><span className='font-bold'>Education:</span> {education}</p>}
                {linkedin && <p><span className='font-bold'>Linkedin:</span> {linkedin}</p>}
                {editStatus || <button onClick={() => setEditStatus(true)} className='btn btn-primary mt-3 font-bold text-white'>Edit or Add</button>}
            </div>
            {editStatus && <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-2xl text-primary font-bold mb-2 ">Edit or Add:</h3>
                <div class="form-control  max-w-xs">
                    <label class="label">
                        <span class="label-text">Education</span>
                    </label>
                    <input
                        {...register("education")}
                        defaultValue={education} type="text" placeholder="Enter last education qualification" class="input input-bordered  max-w-xs" />
                </div>
                <div class="form-control  max-w-xs">
                    <label class="label">
                        <span class="label-text">Address</span>
                    </label>
                    <input
                        {...register("address")}
                        defaultValue={address} type="text" placeholder="Enter current address" class="input input-bordered  max-w-xs" />
                </div>
                <div class="form-control  max-w-xs">
                    <label class="label">
                        <span class="label-text">Phone</span>
                    </label>
                    <input
                        {...register("phone")}
                        defaultValue={phone} type="number" placeholder="Enter phone number" class="input input-bordered  max-w-xs" />
                </div>
                <div class="form-control  max-w-xs">
                    <label class="label">
                        <span class="label-text">Linkedin</span>
                    </label>
                    <input
                        {...register("linkedin")}
                        defaultValue={linkedin} type="text" placeholder="Enter linkedin profile link" class="input input-bordered  max-w-xs" />
                </div>
                <input className='btn btn-primary font-bold text-white mt-5' type="submit" value="Save" />
            </form>}
        </div>
    );
};

export default MyProfile;