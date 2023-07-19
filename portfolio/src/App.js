import React, { useState, useEffect } from 'react';
import './style.css';
import Footer from './components/Footer/Footer';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';
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
    <ThemeContext.Provider value={{isDark, toggleTheme}}>
      <div className={`App ${isDark ? 'dark' : 'light'}`}>
        <PortfolioContainer />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
