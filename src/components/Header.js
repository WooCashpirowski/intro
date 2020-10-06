import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Links from "./Links";
import headerBorder from "../img/header-border.svg";
import { FiSun, FiMoon } from "react-icons/fi";

const HeaderStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  .dm-toggle-btn {
    font-size: 1.8rem;
    border: none;
    background: none;
    position: absolute;
    right: 1.25rem;
    top: 0.75rem;
    cursor: pointer;
    z-index: 4;
    .icon {
      transition: var(--main-transition);
      color: var(--color-primary);
    }
    &:hover .icon {
      transform: scale(1.05);
    }
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    &.dark {
      background: rgba(0, 0, 0, 0.8);
    }
    z-index: 1;
    .logo {
      flex: 2;
      img {
        transition: all 0.2s ease-in-out;
        width: 120px;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex: 3;
      li {
        font-weight: 500;
        font-size: 20px;
        transition: all 0.2s ease-in-out;
        a {
          transition: all 0.2s ease-in-out;
          &:hover {
            color: var(--color-secondary);
          }
        }
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    .header-border {
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      padding: 0 0 1rem;
      img {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      padding: 0.5rem;

      ul {
        display: none;
      }
      .logo {
      }
    }
  }
`;

const Header = ({ toggleDM, darkMode, home, isHome }) => {
  return (
    <HeaderStyled id="top">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="dm-toggle-btn"
        onClick={() => toggleDM(!darkMode)}
      >
        {!darkMode ? <FiMoon className="icon" /> : <FiSun className="icon" />}
      </motion.button>
      <header className={darkMode ? "dark" : ""}>
        <motion.div
          className="logo"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          <Link to="/" onClick={() => home(true)}>
            <img src={logo} alt="logo" />
          </Link>
        </motion.div>
        <Links home={home} isHome={isHome} />
        <motion.div className="header-border">
          <motion.img
            src={headerBorder}
            alt="border"
            initial={{ opacity: 0, scale: 0, width: 0 }}
            animate={{ opacity: 1, scale: 1, width: "100%" }}
            transition={{ delay: 0.5, duration: 2 }}
          />
        </motion.div>
      </header>
    </HeaderStyled>
  );
};

export default Header;
