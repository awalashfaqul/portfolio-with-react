import React from 'react';
import aboutImage from '../assets/2150793852.jpg';
import './AboutMe.css';

function AboutMe(){
    return (
        <div className="main__section">
            <div className="main__container">
                <div className="main__content">
                    <div className="main__text">
                        <h2>A Brief about Me</h2>
                        <p>
                            A proactive and results-oriented professional with a strong background in problem-solving and interpersonal skills, adept at fostering collaboration and leading teams toward achieving objectives. Currently studying Fullstack .NET @ Chas Academy, coupled with a diverse academic background encompassing Innovation Management, Telecommunications Engineering, and Computer Science & Engineering. Committed to continuous learning and making meaningful contributions in dynamic environments. Fluent in Swedish and English.
                        </p>
                        <div className="buttons">
                            <a href="/portfolio">List of projects</a>
                            <a href="/contact">Get in touch</a>
                        </div>
                    </div>
                    <div className="main__image">
                        <img src={aboutImage} alt="Courtasy: FreePik" className="main__img" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutMe;