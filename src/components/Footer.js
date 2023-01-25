import React from 'react';
import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const FooterStyled = styled.footer`
	background: var(--bg-light);
	&.dark {
		background: var(--color-dark);
		color: var(--color-light);
		.social {
			border-top: none;
		}
	}
	.social {
		border-top: 1px solid var(--color-primary);
		text-align: center;
		padding: 2rem 2rem 1.5rem;
		a {
			padding: 0.5rem;
			svg {
				font-size: 2rem;
				transition: var(--main-transition);
				&:hover {
					transform: scale(1.05) rotate(5deg);
				}
			}
		}
	}
	p {
		text-align: center;
		padding: 1rem;
		background: var(--color-primary);
		color: var(--color-light);
		&.dark {
			background: var(--color-dark);
		}
		@media (max-width: 560px) {
			padding-bottom: 66px;
		}
	}
`;

const Footer = ({ darkMode }) => {
	return (
		<FooterStyled className={darkMode ? 'dark' : ''}>
			<div className='social'>
				<a
					href='https://github.com/WooCashpirowski'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithubSquare />
				</a>
				<a
					href='https://www.linkedin.com/in/lukasz-piorowski/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaLinkedin />
				</a>
				<a href='mailto:cashpirowski@gmail.com'>
					<HiOutlineMail />
				</a>
				<a href='tel:48504826927'>
					<FaPhoneSquareAlt />
				</a>
			</div>
			<p className={darkMode ? 'dark' : ''}>
				&copy; {new Date().getFullYear()} Woo Cashpirowski.
			</p>
		</FooterStyled>
	);
};

export default Footer;
