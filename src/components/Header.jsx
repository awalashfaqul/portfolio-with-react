// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className='header'>
//       <nav className="main-nav">
        
//         <a href="index.html" className="logo">Ashfaqul</a>
//         <ul className="navlinks">
//           <li><a href="index.html" className="active">Home</a></li>
//           <li><a href="about.html">About Me</a></li>
//           <li><a href="cv.html">CV/Resume</a></li>
//           <li><a href="portfolio.html">Portfolio</a></li>
//           <li><a href="contact.html">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        
        <NavLink to="/" className="logo">Ashfaqul</NavLink>
        <ul className="navlinks">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink></li>
          <li><NavLink to="/cv" className={({ isActive }) => isActive ? "active" : ""}>CV/Resume</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
