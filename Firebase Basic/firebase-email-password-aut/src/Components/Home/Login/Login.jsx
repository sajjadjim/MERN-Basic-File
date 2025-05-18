
import React from 'react';

import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router';

const Login = () => {
const handleSubmitForm = (e) =>{
  e.preventDefault()
}
    return (

        <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmitForm} className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>New to this site ? Please <Link className='text-blue-700 underline' to='/register'>Register</Link></p>
          </div>
        </div>
    );
};

export default Login;