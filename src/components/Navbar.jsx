import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setShowNavLinks(!showNavLinks);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setShowNavLinks(false);
    setIsMenuOpen(false);
  };

  return (
    <StyledNavbar>
      <div className="logo">Your Logo</div>
      <nav>
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle Navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`nav-links ${showNavLinks ? "show" : ""}`}>
          <li>
            <a href="#home" onClick={handleNavLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#amenities" onClick={handleNavLinkClick}>
              Amenities
            </a>
          </li>
          <li>
            <a href="#streetview" onClick={handleNavLinkClick}>
              Street View
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="contact-btn"
        onClick={handleNavLinkClick}
        aria-label="Contact Us"
      >
        Contact
      </button>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: var(--secondary-color);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: var(--primary-color);
    font-size: 24px;
    font-weight: bold;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 768px) {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: var(--secondary-color);
      padding: 10px;
      text-align: center;
      z-index: 10;
    }

    &.show {
      display: flex;
    }

    li {
      margin: 10px 0;
    }
    li > a:hover {
      color: var(--accent-color);
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
      font-weight: bold;
      transition: color 0.3s ease-in-out;
    }
  }

  .contact-btn {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
    margin-left: auto;
    padding: 10px;

    @media only screen and (max-width: 768px) {
      display: block;
    }
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: var(--primary-color);
    margin: 5px 0;
    transition: 0.4s;
  }

  .menu-toggle.open .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .menu-toggle.open .bar:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.open .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;
