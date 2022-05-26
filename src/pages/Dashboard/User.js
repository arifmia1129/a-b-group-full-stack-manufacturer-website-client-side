import React from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import { toast } from 'react-toastify';

const User = ({ index, user, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        axiosPrivate.put(`https://enigmatic-reef-93908.herokuapp.com/user`, { role: "admin", email })
            .then(res => {
                if (res?.data?.result?.acknowledged && res?.data?.result?.modifiedCount) {
                    toast.success("Make admin success!");
                    refetch();
                }
            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {!role && <button onClick={handleMakeAdmin} className='btn btn-error btn-xs text-white'>Make Admin</button>}
            </td>
        </tr>
    );
};

export default User;