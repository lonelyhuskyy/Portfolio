import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/github-mark-white.svg';
import navicon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <span>Raghav Khanna</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('education')}
            >
              Education
            </Nav.Link>
          </Nav>
          <div className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/raghav-khanna-446895199/">
                <img src={navicon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/lonelyhuskyy">
                <img src={navicon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/raghhavkhannaa/">
                <img src={navicon3} alt="Instagram" />
              </a>
            </div>
          </div>
          <button className="vvd" onClick={() => console.log('connect')}>
            <span>Let's Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
