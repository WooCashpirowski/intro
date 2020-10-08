import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import BgImage from "./bgImage";
import { motion } from "framer-motion";

const MainStyled = styled.main`
  min-height: 95vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 4rem;
  background: url(${BgImage}) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 101%;
    background: linear-gradient(
      90deg,
      rgba(251, 249, 255, 0.9) 20%,
      rgba(251, 249, 255, 0) 100%
    );
  }

  &.dark-mode {
    border-bottom: 1px solid #333;
    .overlay {
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 70%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
  }
  .heading-main {
    z-index: 1;
    margin-left: 9rem;
    padding: 2rem;
    margin-top: 5rem;
    height: 100%;
    h1 {
      font-size: 4rem;
      .name {
        color: var(--color-primary);
      }
    }
    h2 {
      font-size: 2.5rem;
      margin-top: 2rem;
      &.who {
        color: var(--color-primary);
        margin-left: 2rem;
        font-weight: 700;
      }
    }
    .links {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .soc-links {
        display: flex;
        padding: 0 0 1rem;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            font-size: 3rem;
            margin-right: 1rem;
            transition: var(--main-transition);
            &:hover {
              transform: scale(1.05) rotate(5deg);
            }
          }
        }
      }

      .btn-primary {
        transition: var(--main-transition);
        margin-left: 3px;
        margin-bottom: 1rem;
        &:hover {
          transform: scale(1.05) rotate(2deg);
        }
        @media (max-width: 359px) {
          margin-top: 0.6rem;
        }
      }
    }
    @media (max-width: 556px) {
      h1 {
        font-size: 2.8rem;
      }
      h2 {
        font-size: 1.7rem;
        margin-top: 1rem;
        &.who {
          margin-left: 0;
        }
      }
    }
    @media (max-width: 320px) {
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    height: 100vh;
    align-items: flex-start;
    padding: 0 2rem;

    &.dark-mode {
      .overlay {
        background: rgba(0, 0, 0, 0.8);
      }
    }
    .heading-main {
      margin-left: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
`;

const containerVariants = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Main = ({ darkMode, home }) => {
  return (
    <>
      <MainStyled className={darkMode ? "dark-mode" : ""}>
        <motion.div
          className="heading-main"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.h1 variants={itemVariants}>
            Hi, I'm <b className="name">Łukasz</b>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="who">
            Welcome to my place
          </motion.h2>
          <motion.h2 variants={itemVariants}>Let me show you around</motion.h2>
          <motion.div variants={itemVariants} className="links">
            <div className="soc-links">
              <a
                href="https://www.linkedin.com/in/lukasz-piorowski/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
              <a
                href="https://github.com/WooCashpirowski"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare className="icon" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        <div className="overlay"></div>
      </MainStyled>
    </>
  );
};

export default Main;
