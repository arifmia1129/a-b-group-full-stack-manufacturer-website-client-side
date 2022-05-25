import React from 'react';
import axiosPrivate from '../../api/axiosPrivate';

const User = ({ index, user, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        axiosPrivate.put(`http://localhost:5000/user`, { role: "admin", email })
        refetch();
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