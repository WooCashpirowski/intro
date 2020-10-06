import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
  background: var(--bg-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 3rem;
  min-height: 90vh;
  &.dark-mode {
    background: var(--color-dark);
    border-bottom: 1px solid #333;
  }
  h1 {
    font-size: 2rem;
  }
  .wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
    margin-top: 2rem;
    position: relative;

    .info {
      padding: 0 2rem 2rem;
      flex: 1;
      width: 50%;
      z-index: 1;
      p {
        line-height: 1.7;
        margin-bottom: 1.2rem;
      }
      .name {
        color: var(--color-primary);
        font-weight: 500;
      }
      .exp-btn {
        margin-top: 2rem;
      }
      @media (max-width: 768px) {
        padding: 0;
      }
    }
    .about-img {
      flex: 1;
      width: 50%;
      img {
        width: 100%;
      }
      @media (max-width: 1000px) {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -25%);
        width: 100%;
        z-index: 0;
        opacity: 0.3 !important;
      }
    }
  }
`;

const SectionB = ({ darkMode, children, title }) => {
  return (
    <SectionStyled className={darkMode ? "dark-mode" : ""}>
      <h1>{title}</h1>
      {children}
    </SectionStyled>
  );
};

export default SectionB;
