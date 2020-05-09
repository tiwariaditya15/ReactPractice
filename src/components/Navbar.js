import React from 'react';
import {Link, NavLink } from 'react-router-dom';
function Navbar(){
    return (
        <nav className = "navbar-wrapper grey darken-3">
                <a className = "brand-logo">Tutorials</a>
                <ul className = "right">
                    <li>
                           <Link to = "/">Home</Link>
                    </li>
                    <li>
                            <Link to = "/About">About</Link> 
                    </li>
                    <li >
                        <Link to = "/Contact">Contact</Link> 
                    </li>
                </ul>
                
                
                
                
        </nav>
    );
}
export default Navbar;