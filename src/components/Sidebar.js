import React from 'react';
import styled from 'styled-components';
import { VscHome, VscPerson } from 'react-icons/vsc';
import { TiClipboard } from 'react-icons/ti';
import { AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const SideBarStyled = styled.nav`
	display: none;
	@media (max-width: 768px) {
		position: fixed;
		right: 0;
		top: 0;
		width: 60px;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.1) 0%,
			rgba(0, 0, 0, 0.7) 40%
		);
		z-index: 3 !important;
		display: block;
		height: 100vh;
		ul {
			height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.link {
				color: var(--color-primary);
				margin: 2rem 0;
				text-align: center;
				svg {
					text-align: center;
					font-size: 2rem;
				}
				p {
					font-size: 12px;
				}
			}
		}
	}
	@media (max-width: 560px) {
		/* position: absolute; */
		top: 100vh;
		transform: translateY(-100%);
		width: 100%;
		max-height: 50px;
		background: rgba(0, 0, 0, 0.8);
		ul {
			flex-direction: row;
			height: 100%;
			justify-content: space-around;
		}
		p {
			display: none;
		}
	}
`;

const Sidebar = ({ home, isHome }) => {
	return (
		<SideBarStyled>
			<ul>
				{isHome ? (
					<ScrollLink
						className='link'
						style={{ cursor: 'pointer' }}
						to='home'
						smooth
					>
						<VscHome />
						<p>home</p>{' '}
					</ScrollLink>
				) : (
					<a
						className='link'
						href='/#home'
						onClick={() => home(true)}
					>
						<VscHome />
						<p>home</p>{' '}
					</a>
				)}
				{isHome ? (
					<ScrollLink
						className='link'
						style={{ cursor: 'pointer' }}
						to='about'
						smooth
					>
						<VscPerson />
						<p>about</p>{' '}
					</ScrollLink>
				) : (
					<a
						className='link'
						href='/#about'
						onClick={() => home(true)}
					>
						<VscPerson />
						<p>about</p>{' '}
					</a>
				)}
				<a
					className='link'
					href='/my-work#top'
					onClick={() => home(false)}
				>
					<TiClipboard />
					<p>my work</p>{' '}
				</a>
				<Link
					className='link'
					to='/contact'
					onClick={() => home(false)}
				>
					<AiOutlinePhone />
					<p>contact</p>{' '}
				</Link>
			</ul>
		</SideBarStyled>
	);
};

export default Sidebar;
