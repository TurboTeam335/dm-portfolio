import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import './Navbar.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import ThemeContext from '../ThemeContext/ThemeContext';
import lightHam from './img/hamburger-light.png';
import darkHam from './img/hamburger dark.png';
import lightX from './img/x-light.png';
import darkX from './img/x-dark.png';

function NavBar({ currentPage, handlePageChange }) {
  const { isDark } = useContext(ThemeContext);
  const [navExpanded, setNavExpanded] = useState(false);

  const handleNavClick = () => {
    setNavExpanded(false);
  };
  const togglerIcon = navExpanded
    ? isDark
      ? darkX
      : lightX
    : isDark
    ? darkHam
    : lightHam;

  return (
    <Navbar
      className={isDark ? 'navbar dark' : 'navbar'}
      variant='dark'
      expand='lg'
      sticky='top'
      expanded={navExpanded}
      onToggle={() => setNavExpanded(!navExpanded)}
    >
      <Navbar.Brand as={Link} to='/'>
        <a href='#home' className='navbar-brand-link'>
          <div className='d-flex align-items-center'>
            <h1 className='brand-name'>&lt; Daniel Mascali /&gt;</h1>
          </div>
        </a>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav'>
        <img
          src={togglerIcon}
          alt={navExpanded ? 'Close navigation' : 'Open navigation'}
        />
      </Navbar.Toggle>

      <Navbar.Collapse id='basic-navbar-nav' className='navbar-collapse'>
        <Nav className='ml-auto nav nav-list'>
          <Nav.Item>
            <Nav.Link href='/#about' onClick={handleNavClick}>
              About
            </Nav.Link>
          </Nav.Item>
          <Dropdown>
            <Dropdown.Toggle
              variant='success'
              id='dropdown-basic'
              className='dropdown-toggle'
            >
              Projects
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-menu'>
              <Dropdown.Item href='/#projects' className='dropdown-item'>
                Development
              </Dropdown.Item>
              <Dropdown.Item href='/#uiux' className='dropdown-item'>
                UI/UX Design
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Item>
            <Nav.Link href='/#education' onClick={handleNavClick}>
              Education
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/#skills' onClick={handleNavClick}>
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/#contact' onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as='a'
              // href='https://raw.githubusercontent.com/TurboTeam335/dm-portfolio/4270909753c7d438ce3ec88abdf01ad3dde24cbf/Daniel%20Mascali%20%202023%20JrDev%20Resume.pdf'
              href='https://raw.githubusercontent.com/TurboTeam335/dm-portfolio/411eb32b84e9e5c860f4393e160ef950caf9a151/Daniel%20Mascali%20%20Dev%20Resume.pdf'
              download
              target='_blank'
              rel='noopener noreferrer'
              className={currentPage === 'Resume' ? 'active-link' : ''}
              onClick={() => handleNavClick('Resume')}
            >
              Resume
            </Nav.Link>
          </Nav.Item>
          <li>
            <ToggleSwitch />
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
