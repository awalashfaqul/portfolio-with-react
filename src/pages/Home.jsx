import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import homeImage from '../assets/5625516.png';

const Home = () => {
  return (
    <div className="main__section">
        <div className="main__container">
            <h1>Hello, I'm Ashfaqul!</h1>
            <div className="main__content">
                <div className="main__text">
                    <h2>Fullstack Developer (.NET)</h2>
                    <p>
                        "Welcome to my webpage! Here, you'll find a glimpse into who I am, my professional journey, and the projects that define my skills and passions. Whether you're here to learn about my background, explore my portfolio, or simply get in touch, I'm thrilled to have you. Feel free to wander through the pages and discover more about what drives me in my endeavors. Thank you for stopping by!"
                    </p>
                    <div className="buttons">
                        <a href="portfolio.html">List of projects</a>
                        <NavLink to="/contact">Get in touch</NavLink>
                    </div>
                </div>
                <div className="main__image">
                    <img src={homeImage} alt="Courtasy: IconScout" className="main__img" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
