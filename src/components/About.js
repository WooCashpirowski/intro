import React, { useEffect, useState } from 'react';
import aboutImg from '../img/about-img.svg';
import { motion } from 'framer-motion';
import SectionB from './SectionB';
import { client } from '../client';

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

const About = ({ darkMode, home }) => {
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setLastYPos(window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastYPos]);

  const [info, setInfo] = useState();

  useEffect(() => {
    const fetchInfo = () => {
      client
        .getEntry('250JO8e3oGe9NaFxHnU2gx')
        .then((res) => {
          setInfo(res.fields);
        })
        .catch(console.error);
    };
    fetchInfo();
  }, []);

  return (
    <SectionB darkMode={darkMode} title="about me">
      <div className="wrapper">
        <motion.div
          className="info"
          variants={infoVariants}
          initial="initial"
          animate={lastYPos > 900 ? 'animate' : 'exit'}
        >
          {info && (
            <>
              <motion.p variants={itemVariants}>
                {info.intro} <span className="name">{info && info.span}</span>{' '}
                {info.first}
              </motion.p>
              <motion.p variants={itemVariants}>{info.second}</motion.p>
              <motion.p variants={itemVariants}>{info.third}</motion.p>
              <motion.p variants={itemVariants}>{info.fourth}</motion.p>
            </>
          )}
          <motion.div variants={btnVariants} className="exp-btn">
            <a
              href="/my-work#top"
              className={darkMode ? 'btn-primary dark' : 'btn-primary'}
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
          animate={lastYPos > 900 ? 'animate' : 'initial'}
          exit="exit"
        >
          <img
            src={aboutImg}
            alt="it's me more less, I wear black mostly though"
          />
        </motion.div>
      </div>
    </SectionB>
  );
};

export default About;
