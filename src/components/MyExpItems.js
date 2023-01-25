import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	min-height: 70vh;
	width: 80%;
	margin: 0 auto;
	.buttons {
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: flex-start;
		justify-content: space-around;
		margin-right: 1rem;
		padding-right: 1rem;
		border-right: 1px solid var(--color-primary);
		button {
			border: 1px solid transparent;
			background: none;
			cursor: pointer;
			margin: 0.2rem;
			padding: 1rem 0.5rem;
			width: 130px;
			transition: var(--main-transition);
			font-size: 16px;
			&.dark {
				color: var(--color-light);
			}

			&.active,
			&:hover {
				border: 1px solid var(--color-secondary);
				font-weight: 500;
				color: var(--color-secondary);
				transform: scale(1.05);
			}
		}
	}
	.content {
		flex: 5;
		.content-item {
			margin-left: 3rem;
			h2,
			p {
				margin-bottom: 1rem;
			}
			h3 {
				margin-left: 1rem;
				margin-bottom: 1.5rem;
				color: var(--color-secondary);
			}
			p {
				line-height: 24px;
			}
		}
	}
	@media (max-width: 768px) {
		flex-direction: column;
		.buttons {
			flex-direction: row;
			flex-wrap: wrap;
			border: none;
			margin-bottom: 2rem;
			margin-right: 0;
			justify-content: flex-start;
			button {
				margin: 0.2rem;
				padding: 0.2rem;
				width: 100px;
				font-size: 13px;
			}
		}
		.content {
			.content-item {
				margin-left: 0;
			}
		}
	}
`;

const contentVariants = {
	initial: { scale: 0, x: -100, y: -100 },
	animate: {
		scale: 1,
		x: 0,
		y: 0,
		transition: {
			delay: 0.4,
			duration: 0.5,
		},
	},
};

const ExpItems = ({ items, darkMode }) => {
	const [activeContent, setActiveContent] = useState(0);

	useEffect(() => {
		!!items.length && setActiveContent(items.length);
	}, [items.length]);

	return (
		<motion.div>
			<Wrapper>
				<div className='buttons'>
					{items.map((item) => {
						const { id, company } = item.fields;
						return (
							<button
								className={
									darkMode
										? parseInt(activeContent) === id
											? 'active'
											: parseInt(activeContent) !== id
											? 'dark'
											: ''
										: parseInt(activeContent) === id
										? 'active'
										: ''
								}
								key={id}
								data-id={id}
								onClick={(e) =>
									setActiveContent(e.target.dataset.id)
								}
							>
								{company}
							</button>
						);
					})}
				</div>
				<div className='content'>
					{items.map((item) => {
						const {
							id,
							dates,
							position,
							desc1,
							desc2,
							desc3,
							desc4,
						} = item.fields;

						return (
							parseInt(activeContent) === id && (
								<motion.div
									variants={contentVariants}
									initial='initial'
									animate='animate'
									exit='initial'
									className={
										darkMode
											? 'content-item dark'
											: 'content-item'
									}
									key={id}
									id={id}
								>
									<h2>{position}</h2>
									<h3>{dates}</h3>
									<p>{desc1}</p>
									{desc2 && <p>{desc2}</p>}
									{desc3 && <p>{desc3}</p>}
									{desc4 && <p>{desc4}</p>}
								</motion.div>
							)
						);
					})}
				</div>
			</Wrapper>
		</motion.div>
	);
};

export default ExpItems;
