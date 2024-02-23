import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import Loader from '../../common/Loader';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user, isLoading } = useAuth0();
    const location = useLocation();

    if (isLoading) {
        return <Loader />;
    }

    if (user) {
        return <>{children}</>;
    }

    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
