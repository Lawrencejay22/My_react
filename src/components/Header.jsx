import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ljayLogo from '../assets/images/LJAY.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <Link to="/" className="logo">
        <span>LJAY</span>
        <img src={ljayLogo} alt="logo" />
      </Link>

      <nav className={`nav ${isMenuOpen ? 'show-menu' : ''}`}>
        <ul>
          <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/skills" className={isActive('/skills')} onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact Me</Link></li>
          <li><Link to="/resume" className={isActive('/resume')} onClick={closeMenu}>Resume</Link></li>
        </ul>
      </nav>

      <div className="social-icons">
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61582871464053" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@lawrencejaygabionza4422/playlists" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Lawrencejay22" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;