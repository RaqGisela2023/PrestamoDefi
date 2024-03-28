import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={activeLink === '/' ? styles.activeLi : styles.li}>
          <Link to="/" style={styles.link} onClick={() => handleLinkClick('/')}>
            Inicio
          </Link>
        </li>
        <li style={activeLink === '/productos' ? styles.activeLi : styles.li}>
          <Link to="/productos" style={styles.link} onClick={() => handleLinkClick('/productos')}>
            Productos
          </Link>
        </li>
        <li style={activeLink === '/acerca' ? styles.activeLi : styles.li}>
          <Link to="/acerca" style={styles.link} onClick={() => handleLinkClick('/acerca')}>
            Acerca de
          </Link>
        </li>
        <li style={activeLink === '/contacto' ? styles.activeLi : styles.li}>
          <Link to="/contacto" style={styles.link} onClick={() => handleLinkClick('/contacto')}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  li: {
    margin: '0 10px',
  },
  activeLi: {
    margin: '0 10px',
    borderBottom: '2px solid #fff',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px 15px',
    transition: 'border-bottom 0.3s ease',
  },
};

export default Navbar;
