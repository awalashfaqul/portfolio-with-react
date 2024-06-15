import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyResume from './pages/MyResume';
import MyPortfolio from './pages/MyPortfolio';
import ContactMe from './pages/ContactMe';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<MyResume />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/contact" element={<ContactMe />} />
        {/* Add other routes here, e.g., About, CV/Resume, Portfolio, Contact */}
      </Routes>
    </Router>
  );
};

export default App;
