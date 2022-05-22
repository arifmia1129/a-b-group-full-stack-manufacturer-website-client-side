import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar">

                    <div class="flex-1 px-2 mx-2 text-2xl font-bold text-secondary">A&B Group</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li><NavLink to="/" className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>About</NavLink></li>
                            <li><NavLink to="/login" className={({ isActive }) =>
                                isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Login</NavLink></li>
                        </ul>
                    </div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-fit bg-base-100 pr-10">
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) =>
                        isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>About</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) =>
                        isActive ? "bg-gradient-to-r from-secondary to-primary font-fold text-white rounded-lg" : ""}>Login</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;