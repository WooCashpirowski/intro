import React from 'react';
import Main from '../components/Main';
import Section from '../components/Section';
import About from '../components/About';
// import Features from '../components/Features';
import FeaturedProjects from '../components/FeaturedProjects';
import { motion } from 'framer-motion';

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

const Home = ({ darkMode, home }) => {
	return (
		<motion.div
			variants={containerVariants}
			initial='initial'
			animate='animate'
			exit='initial'
		>
			<div id='home'>
				<Main darkMode={darkMode} home={home} />
			</div>
			{/* <Section darkMode={darkMode} title="what can I do for you?">
        <Features darkMode={darkMode} />
      </Section> */}
			<div id='about'>
				<About darkMode={darkMode} home={home} />
			</div>
			<Section darkMode={darkMode} title='featured projects'>
				{' '}
				<FeaturedProjects darkMode={darkMode} />{' '}
			</Section>
		</motion.div>
	);
};

export default Home;
