import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import css from "../img/logos/css.svg";
import html from "../img/logos/html.svg";
import js from "../img/logos/js.svg";
import react from "../img/logos/react.svg";
import gatsby from "../img/logos/gatsby.svg";
import figma from "../img/logos/figma.svg";
import Projects from "../components/Projects";
import MyExpData from "../components/MyExpData";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const SectionStyled = styled.section`
  background: var(--bg-light);
  color: var(--color-dark);
  padding: 2rem 0 3rem;

  &.dark {
    background: var(--color-dark);
    color: var(--color-light);
    border-bottom: 1px solid #333;
  }
  &.blue {
    background: var(--color-primary);
    color: var(--color-light);

    &.dark {
      background: var(--color-dark);
      border-bottom: 1px solid #333;
    }
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .stack-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    img {
      margin: 1rem;
    }
  }
`;

const Experience = ({ darkMode }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <div id="top">
        <SectionStyled className={darkMode ? "dark" : ""}>
          <h1 style={{ marginTop: "100px" }}>my projects</h1>
          <Projects darkMode={darkMode} />
        </SectionStyled>
      </div>

      <SectionStyled className={darkMode ? "blue dark" : "blue"} id="projects">
        <h1>experience</h1>
        <MyExpData darkMode={darkMode} />
      </SectionStyled>

      <SectionStyled className={darkMode ? "dark" : ""}>
        <h1>i work with these guys</h1>
        <div className="stack-icons">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="js" />
          <img src={react} alt="react" />
          <img src={gatsby} alt="gatsby" />
          <img src={figma} alt="figma" />
        </div>
      </SectionStyled>
    </motion.div>
  );
};

export default Experience;
