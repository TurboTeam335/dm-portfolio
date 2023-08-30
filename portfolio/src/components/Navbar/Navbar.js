import React, { useContext } from 'react'; // add useContext here
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import ThemeContext from '../ThemeContext/ThemeContext';

function NavBar({ currentPage, handlePageChange }) {
  const { isDark } = useContext(ThemeContext);
  return (
    <Navbar
      className={isDark ? 'navbar dark' : 'navbar'}
      variant='dark'
      expand='lg'
      sticky='top'
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
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'active-link' : ''}
            >
              About
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href='#projects'
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'active-link' : ''}
            >
              Projects
            </Nav.Link>
          </li>

          <li>
            <Nav.Link
              href='#education'
              onClick={() => handlePageChange('Education')}
              className={currentPage === 'Education' ? 'active-link' : ''}
            >
              Education
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href='#skills'
              onClick={() => handlePageChange('Skills')}
              className={currentPage === 'Skills' ? 'active-link' : ''}
            >
              Skills
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
