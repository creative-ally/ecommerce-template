import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import auth from '../../firebase.init';
import Loader from '../../Shared/Loader/Loader'




const RequiredAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminloading] = useAdmin(user)
    const location = useLocation()
    if (loading || adminloading) {
        return <Loader/>
    }

    if (error) {
        toast.error(error.message)
    }

    if (!user || !admin) {
        return <Navigate to='/Signin' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequiredAdmin;