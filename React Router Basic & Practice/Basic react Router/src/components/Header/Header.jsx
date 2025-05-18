import React from 'react';
import { Link, NavLink } from 'react-router';
// import '/header.css'
const Header = () => {
    return (
        <div>
            <h2>This is Header......!</h2>
            <nav className='navbar'  style={{display:'flex' , gap:'10px'}}>
               <button><NavLink to="/">Home</NavLink></button>
               <button><NavLink to="/laptop">Laptop</NavLink></button>
               <button><NavLink to="/mobile">Mobile</NavLink></button>
               <button><NavLink to="/users">User</NavLink></button>
               <button><NavLink to="/users2">User2</NavLink></button>
            </nav>          
        </div>
    );
};

export default Header;