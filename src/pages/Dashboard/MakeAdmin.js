import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import User from './User';

const MakeAdmin = () => {
    const { isLoading, data: users, refetch } = useQuery('bookingProduct', () =>
        fetch(`https://enigmatic-reef-93908.herokuapp.com/user`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        users?.map((user, index) => <User
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
            {

            }
        </div>
    );
};

export default MakeAdmin;