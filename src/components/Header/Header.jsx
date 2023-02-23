import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';

const Header = () => {
  const nav__links = [
    {
      path: 'Multimart',
      display: 'Home',
    },
    {
      path: '/shop',
      display: 'Shop',
    },
    {
      path: '/cart',
      display: 'Cart',
    },
  ];

  const activeClass = ({ isActive }) =>
    isActive ? 'nav__link nav__active' : 'nav__link';

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Multimart</h1>
              <p>Since 1997</p>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav__links.map(({ path, display }) => (
                  <li key={path} className="nav__item">
                    <NavLink className={activeClass} to={path}>
                      {display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="bange">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="bange">1</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="user icon"
                />
              </span>
            </div>
            <div className="mobile__menu">
              <span>
                <i className="ri-menu-fill"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
