import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h2>Fire Base Authentication </h2>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;