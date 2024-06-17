// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import './Header.css';

// function Header() {
//     //const location = useLocation();
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     // const isActive = (path) => location.pathname === path;

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     return (
//         <header className="header">
//             <nav className="navigation-menu" id="myTopnav">
//                 <NavLink to="/" className="logo">Ashfaqul</NavLink>
//                 <div className={`navlinks ${isDropdownOpen ? 'responsive' : ''}`}>
//                     <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
//                     <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About Me</NavLink>
//                     <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Resume</NavLink>
//                     <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Portfolio</NavLink>
//                     <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact Me</NavLink>
//                 </div>
//                 <a href="javascript:void(0);" className="icon" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//                     <i className="fa fa-bars"></i>
//                 </a>
//             </nav>
//         </header>
//     );
// }

// export default Header;

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function Header() {
    const location = useLocation();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const handleSaveAsPDF = async () => {
        // Exclude the navigation bar from the screenshot
        const element = document.getElementById('resume-content');
      
        // Use html2canvas to capture the screenshot
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
    
        // Create a jsPDF instance
        const pdf = new jsPDF('p', 'pt', 'a4');
    
        // Calculate the image dimensions to fit within the PDF page
        const imgWidth = 595.28;
        const pageHeight = 841.89;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
    
        let position = 0;
    
        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
    
        // Save the PDF
        pdf.save('resume.pdf');
      };
    

    const handlePrint = () => {
        alert('Printing resume...');
        window.print();
    };

    return (
        <header className="header">
            <nav className="navigation-menu" id="myTopnav">
                <NavLink to="/" className="logo">Ashfaqul</NavLink>
                <div className={`navlinks ${isDropdownOpen ? 'responsive' : ''}`}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About Me</NavLink>
                    <span className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
                            My Resume
                        </NavLink>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li id="generate-pdf" onClick={handleSaveAsPDF}>Save as PDF</li>
                                <li onClick={handlePrint}>Print</li>
                            </ul>
                        )}
                    </span>
                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Portfolio</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact Me</NavLink>
                </div>
                <a href="javascript:void(0);" className="icon" onClick={toggleDropdown}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>
        </header>
    );
}

export default Header;
