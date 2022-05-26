import { signOut } from 'firebase/auth';
import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Shared/Spinner';

const RequireAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin();
    const navigate = useNavigate();
    if (loading) {
        return <Spinner />
    }

    if (!user || !admin) {
        signOut(auth);
        localStorage.removeItem("token");
        navigate("/login");
    }
    return Children;
};

export default RequireAdmin;