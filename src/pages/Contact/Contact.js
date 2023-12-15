import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import github from './img/github.png';
import githublight from './img/githublight.png';
import instagram from './img/instagram.png';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
import ThemeContext from '../../components/ThemeContext/ThemeContext';

function Contact() {
  const { isDark } = useContext(ThemeContext);
  return (
    <Container className='py-4 '>
      <h2>Contact</h2>
      <div className='contact-box'>
        <a href='https://github.com/TurboTeam335' target='_blank' rel='noreferrer'>
          <img src={isDark ? githublight : github} alt='GitHub' />
        </a>
        <a href='https://www.linkedin.com/in/daniel-mascali-b2a07219/' target='_blank' rel='noreferrer'>
          <img src={linkedin} alt='LinkedIn' />
        </a>
        <a href='https://www.instagram.com/dgmascali' target='_blank' rel='noreferrer'>
          <img src={instagram} alt='Instagram' />
        </a>
        <a href='mailto:daniel.mascali87@gmail.com'>
          <img src={email} alt='Email' />
        </a>
      </div>
    </Container>
  );
}

export default Contact;
