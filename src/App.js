import React, { useState, useEffect, useContext } from 'react';
import './style.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import DevelopmentProjects from './pages/Projects/DevelopmentProjects/DevelopmentProjects';
import UIUXProjects from './pages/Projects/UIUXProjects/UIUXProjects';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import Quotes from './components/Quotes/Quotes';
import Home from './pages/Home/Home';
import ThemeContext from './components/ThemeContext/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDark') === 'true';
    setIsDark(savedTheme);
  }, []);

  const toggleTheme = () => {
    localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`App ${isDark ? 'dark' : 'light'}`}>
        <Navbar />
        <div id='home' className='section-anchor'>
          <Home />
        </div>
        <Quotes quoteIndex={5} />
        <div id='about' className='section-anchor'>
          <About />
        </div>
        <Quotes quoteIndex={0} />
        <div id='projects' className='section-anchor'>
          <Projects />
        </div>
        <div id='development' className='section-anchor'>
          <DevelopmentProjects />
        </div>
        <div id='uiux' className='section-anchor'>
          <UIUXProjects />
        </div>

        <Quotes quoteIndex={3} />
        <div id='education' className='section-anchor'>
          <Education />
        </div>
        <Quotes quoteIndex={1} />
        <div id='skills' className='section-anchor'>
          <Skills />
        </div>
        {/* <Quotes quoteIndex={1} /> */}
        <div id='contact' className='section-anchor'>
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
