import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
  background: var(--color-primary);
  text-align: center;
  padding: 2rem 0 3rem;
  &.dark-mode {
    background: var(--color-dark);
    border-bottom: 1px solid #333;
  }
  h1 {
    color: var(--color-light);
    font-size: 2rem;
    text-align: center;
  }
`;

const Section = ({ darkMode, children, title }) => {
  return (
    <SectionStyled className={darkMode ? "dark-mode" : ""}>
      <h1>{title}</h1>
      {children}
    </SectionStyled>
  );
};

export default Section;
