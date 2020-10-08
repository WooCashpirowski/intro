import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { GoArrowUp } from "react-icons/go";

const ScrollToTop = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  cursor: pointer;
  font-size: 2rem;
  transform: scale(0);
  transition: transform 0.5s ease;
  &.visible {
    transform: scale(1);
  }
  svg {
    color: var(--color-secondary);
    border: 1.5px solid var(--color-secondary);
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    right: 4.5rem;
  }
  @media (max-width: 560px) {
    right: 1rem;
    bottom: 4.5rem;
  }
`;

class BackToTop extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 300;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <ScrollToTop className={!this.state.isTop ? "visible" : ""}>
        <ScrollLink to="top" smooth>
          <GoArrowUp />
        </ScrollLink>
      </ScrollToTop>
    );
  }
}

export default BackToTop;
