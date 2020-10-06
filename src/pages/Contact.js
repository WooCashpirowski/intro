import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SectionStyled = styled.section`
  background: var(--bg-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 3rem;
  min-height: calc(100vh - 124px);
  &.dark {
    background: var(--color-dark);
    border-bottom: 1px solid #333;
    color: var(--color-light);
  }
  h1 {
    font-size: 2rem;
    margin-top: 100px;
  }
  .contact-form {
    form {
      margin-top: 2rem;
      padding: 14px;
      transition: all 0.2s ease;
      border: 1px solid var(--color-primary);
      background: var(--color-light);
      .form-group {
        .form-control {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: none;
          background: rgba(197, 244, 244, 0.4);
          &:focus {
            outline-color: rgba(197, 244, 244, 1);
            transform: scale(1.01);
            &::placeholder {
              color: transparent;
            }
          }
          &::placeholder {
            font-family: "Montserrat", sans-serif;
          }
        }
        textarea {
          font-family: "Montserrat", sans-serif;
        }
      }
      button {
        border: none;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 1.2px;
        &:hover {
          transform: scale(1.05);
        }
      }
      &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      }
      &.dark {
        border: 1px solid var(--color-light);
        background: var(--color-dark);
        box-shadow: 2px 2px 0 var(--color-light);
        margin-top: 27px;
        .form-control {
          color: white;
          background: none;
          border: 1px solid var(--color-light);
        }
        button {
          color: var(--color-dark);
        }
      }
      @media (max-width: 700px) {
        margin: 2rem 3rem;
      }
      @media (max-width: 560px) {
        margin: 2rem 1rem;
      }
    }
  }
`;

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const formVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

const Contact = ({ darkMode }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <SectionStyled className={darkMode ? "dark" : ""}>
        <h1>let's get in touch</h1>
        <div className="contact-form">
          <motion.form
            variants={formVariants}
            action="https://formspree.io/mnqgkdyy"
            method="POST"
            className={darkMode ? "dark" : ""}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="form-control"
                required
              />
              <input
                type="email"
                placeholder="your email"
                name="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                rows="10"
                placeholder="your message"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              send
            </button>
          </motion.form>
        </div>
      </SectionStyled>
    </motion.div>
  );
};

export default Contact;
