import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    //const location = useLocation();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // const isActive = (path) => location.pathname === path;

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <header className="header">
            <nav className="navigation-menu" id="myTopnav">
                <NavLink to="/" className="logo">Ashfaqul</NavLink>
                <div className={`navlinks ${isDropdownOpen ? 'responsive' : ''}`}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About Me</NavLink>
                    <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Resume</NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Portfolio</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact Me</NavLink>
                </div>
                <a href="javascript:void(0);" className="icon" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>
        </header>
    );
}

export default Header;
