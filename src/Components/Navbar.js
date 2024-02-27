import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='menu-container'>
            <ul className='nav-links'>
                <li>
                    <Link to='/' className='nav-link'>
                        Hem
                    </Link>
                </li>
                <li>
                    <Link to='/cv' className='nav-link'>
                        Cv
                    </Link>
                </li>
                <li>
                    <Link to='/portfolio' className='nav-link'>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to='/kontakt' className='nav-link'>
                        Kontakt
                    </Link>
                </li>
                
               
            </ul>
        </div>
    </div>
);
};
export default Navbar;