import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import Section from "../components/Section";
import SectionB from "../components/SectionB";
import Features from "../components/Features";
import aboutImg from "../img/about-img.svg";
import FeaturedProjects from "../components/FeaturedProjects";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const infoVariants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 500,
    transition: {
      duration: 1,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const btnVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const Home = ({ darkMode, home }) => {
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setLastYPos(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastYPos]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <div id="home">
        <Main darkMode={darkMode} home={home} />
      </div>
      <Section darkMode={darkMode} title="what can I do for you?">
        <Features darkMode={darkMode} />
      </Section>
      <div id="about">
        <SectionB darkMode={darkMode} title="about me">
          <div className="wrapper">
            <motion.div
              className="info"
              variants={infoVariants}
              initial="initial"
              animate={lastYPos > 900 ? "animate" : "exit"}
            >
              <motion.p variants={itemVariants}>
                Hello, my name is <span className="name">Łukasz Piórowski</span>{" "}
                and I live near the city of Lublin in eastern part of Poland. I
                obtained a master's degree in international relations at the
                Maria Curie-Skłodowska University.
              </motion.p>
              <motion.p variants={itemVariants}>
                {"And I make websites :)"}
              </motion.p>
              <motion.p variants={itemVariants}>
                For the past years I've been working as a project manager. I
                managed and completed plenty of various projects. One day I felt
                that there was something missing in my professional life. And so
                I started a Youtube tutorial on HTML and CSS. So now I'm here
                and I can say for sure that this is where I'm staying.
              </motion.p>
              <motion.p variants={itemVariants}>
                I like teamwork, but what makes the best of me is the
                opportunity to work in an international environment of
                professionals. Click below to find out more about my experience.
              </motion.p>
              <motion.div variants={btnVariants} className="exp-btn">
                <a
                  href="/my-work#top"
                  className={darkMode ? "btn-primary dark" : "btn-primary"}
                  onClick={() => home(false)}
                >
                  wiew my work
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="about-img"
              variants={imgVariants}
              initial="initial"
              animate={lastYPos > 900 ? "animate" : "initial"}
              exit="exit"
            >
              <img
                src={aboutImg}
                alt="more less me, I wear black mostly though"
              />
            </motion.div>
          </div>
        </SectionB>
      </div>
      <Section darkMode={darkMode} title="my projects">
        {" "}
        <FeaturedProjects darkMode={darkMode} />{" "}
      </Section>
    </motion.div>
  );
};

export default Home;
