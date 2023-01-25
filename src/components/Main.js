import React from 'react';
import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import BgImage from './bgImage';
import { motion } from 'framer-motion';

const containerVariants = {
	initial: {
		opacity: 0,
		x: 500,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			staggerChildren: 0.8,
			delay: 0.5,
		},
	},
};
const itemVariants = {
	initial: {
		opacity: 0,
		x: 400,
	},
	animate: {
		opacity: 1,
		x: 0,
	},
};

const Main = ({ darkMode }) => {
	return (
		<>
			<MainStyled className={darkMode ? 'dark-mode' : ''}>
				<motion.div
					className='heading-main'
					variants={containerVariants}
					initial='initial'
					animate='animate'
					exit='initial'
				>
					<motion.h1 variants={itemVariants}>
						Hi, I'm <b className='name'>ŁUKASZ</b>
					</motion.h1>

					<motion.div variants={itemVariants} className='links'>
						<a
							href='https://www.linkedin.com/in/lukasz-piorowski/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLinkedin className='icon' />
						</a>
						<a
							href='https://github.com/WooCashpirowski'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaGithubSquare className='icon' />
						</a>
					</motion.div>
				</motion.div>
				<div className='overlay'></div>
			</MainStyled>
		</>
	);
};

export default Main;

const MainStyled = styled.main`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-left: 4rem;
	background: url(${BgImage}) no-repeat;
	background-position: center;
	background-size: cover;
	position: relative;
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			rgba(251, 249, 255, 0.9) 20%,
			rgba(251, 249, 255, 0) 100%
		);
	}

	&.dark-mode {
		border-bottom: 1px solid #333;
		.overlay {
			background: linear-gradient(
				90deg,
				rgba(0, 0, 0, 0.8) 70%,
				rgba(0, 0, 0, 0.7) 100%
			);
		}
	}
	.heading-main {
		z-index: 1;
		margin-left: 10%;
		padding: 2rem;
		margin-top: 5rem;
		h1 {
			font-size: 6rem;
			text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
			.name {
				color: var(--color-primary);
			}
		}
		.links {
			margin-top: 1.4rem;
			display: flex;
			padding-left: 0.2rem;
			a {
				display: flex;
				justify-content: center;
				align-items: center;
				.icon {
					font-size: 4rem;
					margin-right: 1rem;
					transition: var(--main-transition);
					&:hover {
						transform: scale(1.05) rotate(5deg);
					}
				}
			}
		}
	}

	@media (max-width: 768px) {
		align-items: flex-start;
		padding: 0 1rem;
		&.dark-mode {
			.overlay {
				background: rgba(0, 0, 0, 0.8);
			}
		}
		.heading-main {
			margin-left: 5%;
			height: 80%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			padding: 1rem;

			@media (max-width: 556px) {
				h1 {
					font-size: 4rem;
					@media (max-width: 350px) {
						font-size: 3rem;
					}
				}
				.links {
					margin-top: 0.8rem;
					padding-left: 0.1rem;
					a {
						.icon {
							font-size: 3rem;
						}
					}
				}
			}
		}
	}
`;
