import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router";
import { auth } from './../../../firebase.init';

const Register = () => {
const handleSubmitForm = (e) =>{
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(name , email , password)

  createUserWithEmailAndPassword(auth , email , password).then(result =>{
    console.log(result)
  }).catch(error=>{
    console.log(error)
  })
}
  return (
    <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
     <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmitForm} className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email"  name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>Already Have account ? Please <NavLink className='text-blue-700 underline' to='/login'>Login</NavLink></p>
          </div>
        </div>
  </div>
  );
};

export default Register;
