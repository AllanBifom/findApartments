// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
