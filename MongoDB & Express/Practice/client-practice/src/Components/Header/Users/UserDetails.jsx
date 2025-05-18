import React from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            
    <div className="bg-gray-100  grid items-center justify-center">
       <div className='text-center'> <Link to="/"><button className='btn btn-primary'>Home</button></Link></div>
        <div className='my-20 font-bold text-center grid text-2xl gap-5'>
            <p>Name : {data.name}</p>
            <p>Email Address : {data.email}</p>
        </div>
    </div>
        </div>
    );  
};

export default UserDetails;