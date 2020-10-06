import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const data = [
  {
    id: 1,
    text: "my work",
    url: "/my-work/",
  },
  {
    id: 2,
    text: "contact",
    url: "/contact/",
  },
];

const listVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export default ({ home, isHome }) => {
  return (
    <motion.ul variants={listVariants} initial="initial" animate="animate">
      <motion.li variants={listItemVariants}>
        <Link to="/" onClick={() => home(true)}>
          home
        </Link>
      </motion.li>
      <motion.li variants={listItemVariants}>
        {isHome ? (
          <ScrollLink style={{ cursor: "pointer" }} to="about" smooth>
            about
          </ScrollLink>
        ) : (
          <a href="/#about" onClick={() => home(true)}>
            about
          </a>
        )}
      </motion.li>
      {data.map((link) => {
        return (
          <motion.li variants={listItemVariants} key={link.id}>
            <Link to={link.url} onClick={() => home(false)}>
              {link.text}
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
