import React, { use, useState } from 'react';
import { Link } from 'react-router';

const Users = ({ userDataPromise }) => {

    const userInitial = use(userDataPromise);

    // usestate use Here for live Data Update 
    const [users, setUsers] = useState(userInitial)
    //    console.log(user)

    const handleUserAddNew = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value
        const newUser = { name, email }
        console.log(newUser)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log("AFter add new Data", data)
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newusers = [...users, newUser]
                    setUsers(newusers)
                    alert('Data has been added')
                    e.target.reset();
                }
            })

    }

    // User has been Delete on the Table 
    const handleUserdeleteButton = (id) => {
        console.log("user has been Delete ", id)
        fetch(`http://localhost:3000/users/${id}`, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("User has been delete successfully", data)
                if(data.deletedCount){
                const remainningUsers =users.filter(user =>user._id !== id)
                setUsers(remainningUsers)
            }
            })
    }


    return (
        <div>
            <form onSubmit={handleUserAddNew} className='grid mx-auto justify-center my-20'>
                <input type="text" name='name' placeholder="write name" className="input" />
                <input type="email" name='email' placeholder="enter email" className="input" />
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>


            <h3 className='mx-auto font-bold text-center grid  justify-center text-xl'>Data Show Here <br /> No. of user :{users.length}</h3>

            <div>


                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button className='btn btn-success'><Link to={`/update/${user._id}`}>Update</Link></button></td>
                                    <td><button onClick={() => handleUserdeleteButton(user._id)} className='btn btn-error'>Delete</button></td>
                                    <td><button className='btn btn-success'><Link to={`/details/${user._id}`}>Details</Link></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
