import React, { useContext } from 'react';
import './Footer.css';
import github from './img/github.png'
import githublight from './img/githublight.png'
import instagram from './img/instagram.png'
import linkedin from './img/linkedin.png'
import spotify from './img/spotify.png'
import email from './img/email.png'
import ThemeContext from '../ThemeContext/ThemeContext'



function Footer() {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer>
      <div className='logo'>
      <a href="https://github.com/TurboTeam335" target="_blank" rel="noreferrer">
          <img src={isDark ? githublight : github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/daniel-mascali-b2a07219/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/dgmascali" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        {/* <a href="https://open.spotify.com/playlist/37i9dQZF1EQnJyHBkXpASl?si=5177a31f265f41c3" target="_blank" rel="noreferrer">
          <img src={spotify} alt="Spotify" />
        </a> */}
        <a href="mailto:danielmascalimusic@gmail.com">
          <img src={email} alt="Email" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;