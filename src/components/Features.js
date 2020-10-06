import React from "react";
import styled from "styled-components";
import { FiCode } from "react-icons/fi";
import { BiPalette } from "react-icons/bi";
import { VscProject } from "react-icons/vsc";

const FeaturesStyled = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .card {
    background: var(--color-light);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 240px;
    padding: 1rem 2rem;
    margin-top: 1rem;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    .icon {
      font-size: 3rem;
    }
    p {
      font-size: 14px;
    }
    &.dark {
      background: none;
      border: 1px solid var(--color-light);
      box-shadow: 4px 4px 0 rgb(255, 255, 255);
    }
  }
`;

const Features = ({ darkMode }) => {
  return (
    <FeaturesStyled>
      <div className={darkMode ? "card dark" : "card"}>
        <h3>websites & web apps</h3>
        <FiCode className="icon" />
        <p>
          Let's code some website! Or even better - a single page app. Showcase
          and sell your products or services with your own personalized space in
          the Web.
        </p>
      </div>
      <div className={darkMode ? "card dark" : "card"}>
        <h3>web design</h3>
        <BiPalette className="icon" />
        <p>
          You'd like a website? No problem. But first we need to make sure it
          looks nice. First step is always a detailed prototype of your app. My
          favourite tool for that purpose is Figma.
        </p>
      </div>
      <div className={darkMode ? "card dark" : "card"}>
        <h3>project management</h3>
        <VscProject className="icon" />
        <p>
          As a professional with over 10 years of experience I can help you with
          running your project. Budgets, schedules, milestones, deadlines -
          these are my old companions.
        </p>
      </div>
    </FeaturesStyled>
  );
};

export default Features;
