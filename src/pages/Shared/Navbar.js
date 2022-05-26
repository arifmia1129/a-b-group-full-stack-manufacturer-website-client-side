import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from "../../firebase.init";
import Spinner from './Spinner';

const Navbar = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    if (loading) {
        return <Spinner />
    }
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar sticky top-0 z-50 bg-base-100 p-2 mb-10">
                    <div className="flex-1 px-2 mx-2 text-2xl font-bold text-secondary">A&B Group</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li><NavLink to="/" className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Home</NavLink>
                            </li>
                            {
                                user && <li><NavLink to="/dashboard" className={({ isActive }) =>
                                    isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Dashboard</NavLink>
                                </li>
                            }

                            <li><NavLink to="/blogs" className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Blogs</NavLink></li>
                            <li><NavLink to="/my-portfolio" className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>My-Portfolio</NavLink></li>
                            {
                                user ? <>
                                    <button
                                        onClick={() => logout()}
                                        className='btn btn-xs btn-primary text-white mx-2 my-auto'>Sign Out</button>
                                    <p className='my-auto border-2 p-1 rounded-lg'>{user?.displayName}</p>
                                </> : <li><NavLink to="/login" className={({ isActive }) =>
                                    isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Login</NavLink>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-fit bg-base-100 pr-10">
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Home</NavLink></li>
                    {
                        user && <li><NavLink to="/dashboard" className={({ isActive }) =>
                            isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Dashboard</NavLink>
                        </li>
                    }
                    <li><NavLink to="/about" className={({ isActive }) =>
                        isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>About</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) =>
                        isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Login</NavLink></li>

                </ul>

            </div >
        </div >
    );
};

export default Navbar;