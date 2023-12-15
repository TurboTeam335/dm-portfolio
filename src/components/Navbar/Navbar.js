import React, { useContext, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import ThemeContext from '../ThemeContext/ThemeContext';

function NavBar({ currentPage, handlePageChange }) {
  const { isDark } = useContext(ThemeContext);
  const [navExpanded, setNavExpanded] = useState(false);

  const handleNavClick = (page) => {
    handlePageChange(page);
    setNavExpanded(false); 
  };
  return (
    <Navbar
      className={isDark ? 'navbar dark' : 'navbar'}
      variant='dark'
      expand='lg'
      sticky='top'
      expanded={navExpanded} 
      onToggle={setNavExpanded} 
    >
      <Navbar.Brand>
        <div className='d-flex align-items-center'>
          <div>
            <h1 className='brand-name'>&lt; Daniel Mascali /&gt;</h1>
          </div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='navbar-collapse'>
        <ul className='ml-auto nav nav-list'>
          <li>
            <Nav.Link
              href='#about'
              onClick={() => handleNavClick('About')}
              className={currentPage === 'About' ? 'active-link' : ''}
            >
              About
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href='#projects'
              onClick={() => handleNavClick('Projects')}
              className={currentPage === 'Projects' ? 'active-link' : ''}
            >
              Projects
            </Nav.Link>
          </li>

          <li>
            <Nav.Link
              href='#education'
              onClick={() => handleNavClick('Education')}
              className={currentPage === 'Education' ? 'active-link' : ''}
            >
              Education
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href='#skills'
              onClick={() => handleNavClick('Skills')}
              className={currentPage === 'Skills' ? 'active-link' : ''}
            >
              Skills
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href='#contact'
              onClick={() => handleNavClick('Contact')}
              className={currentPage === 'Contact' ? 'active-link' : ''}
            >
              Contact
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as="a"
              href="https://raw.githubusercontent.com/TurboTeam335/dm-portfolio/76c43e8bb892d542dd4c7677e0f24ab4a4dd4636/Daniel%20Mascali%20JrDev%20Resume%20.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className={currentPage === 'Resume' ? 'active-link' : ''}
              onClick={() => handleNavClick('Resume')}
            >
              Resume
            </Nav.Link>
          </li>
          <li>
            <ToggleSwitch />
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
