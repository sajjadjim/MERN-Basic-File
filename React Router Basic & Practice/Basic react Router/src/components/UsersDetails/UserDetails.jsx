import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userData = useLoaderData();
    console.log(userData)
    return (
        <div>
            <div style={{border:'1px solid green' , padding:'5px', marginBottom:'5px'}}>
                <p>Name :{userData.name}</p>
                <p>City :{userData.email}</p>
                <p>City :{userData.phone}</p>
            </div>
        </div>
    );
};

export default UserDetails;