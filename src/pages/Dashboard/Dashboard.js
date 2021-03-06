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
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-base-100  overflow-y-auto w-fit text-base-content">

                        {
                            !admin && <>
                                <li><Link to="/dashboard/my-orders">My Orders</Link></li>
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
            </div >
        </div >
    );
};

export default Dashboard;