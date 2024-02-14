import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return ( 
    <nav className="Meny">
    <ul>
    <li><NavLink to="/" activeClassName="active">Hem</NavLink></li>
    <li><NavLink to="/Cv" activeClassName="active">Cv</NavLink></li>
    <li><NavLink to="/Portfolio" activeClassName="active">Portfolio</NavLink></li>
    </ul>
  </nav>
    );
};