import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({Children}) => {
    const userInfo={
        email:'pot@alu.com'
    }
    return (
        <AuthContext value={userInfo}>
{Children}
        </AuthContext>
    );
};

export default AuthProvider;