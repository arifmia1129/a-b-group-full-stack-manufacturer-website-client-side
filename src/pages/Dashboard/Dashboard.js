import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Shared/Spinner';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, aLoading] = useAdmin(user);
    if (loading || aLoading) {
        return <Spinner />
    }
    return (
        <div>
            <label for="my-drawer-2" class="btn btn-square btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-fit text-base-content">

                        {
                            !admin && <>
                                <li><Link to="/dashboard">My Orders</Link></li>
                                <li><Link to="/dashboard/add-review">Add a Review</Link></li>
                            </>
                        }
                        {
                            admin && <>
                                <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
                                <li><Link to="/dashboard/add-product">Add Product</Link></li>
                                <li><Link to="/dashboard/manage-products">Manage Products</Link></li>
                                <li><Link to="/dashboard/manage-all-orders">Manage All Orders</Link></li>
                            </>
                        }
                        <li><Link to="/dashboard/my-profile">My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;