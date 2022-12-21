import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader'
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()

    if (loading) {
        return <Loader></Loader>
    }

    if (error) {
        toast.error(error.message)
    }

    if (!user) {
        return <Navigate to='/Signin' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;