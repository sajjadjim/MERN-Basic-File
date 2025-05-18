import React from 'react';
import { Link } from 'react-router';

const Userinfo = ({data}) => {
    // console.log(data)
    return (
        <div>
            <div style={{border:'1px solid green' , padding:'5px', marginBottom:'5px'}}>
                <p>Name :{data.name}</p>
                <p>City :{data.email}</p>
                <p>City :{data.phone}</p>
                <Link to={`/user/${data.id}`}>Show Details</Link>
            </div>
        </div>
    );
};

export default Userinfo;