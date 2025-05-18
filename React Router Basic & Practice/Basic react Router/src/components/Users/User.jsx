import React from 'react';
import { useLoaderData } from 'react-router';
import Userinfo from './User/UserInfo'
const User = () => {
    const usersData = useLoaderData()
    // console.log(usersData)
    return (
        <div>
            <h2>
                This is User section
                {
                    usersData.map(((data, index)=> <Userinfo key={index} data={data}></Userinfo>))
                }
            </h2>

        </div>
    );
};

export default User;