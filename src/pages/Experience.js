import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Projects from '../components/Projects';
import MyExpData from '../components/MyExpData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';
import { Mousewheel, FreeMode } from 'swiper';
import { client } from '../client';

const containerVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
};

const SectionStyled = styled.section`
	background: var(--bg-light);
	color: var(--color-dark);
	padding: 2rem 0 3rem;

	&.dark {
		background: var(--color-dark);
		color: var(--color-light);
		border-bottom: 1px solid #333;
	}
	&.blue {
		background: var(--color-primary);
		color: var(--color-light);

		&.dark {
			background: var(--color-dark);
			border-bottom: 1px solid #333;
		}
	}
	h1 {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 2rem;
	}

	.stack-icons {
		max-width: 800px;
		margin: 0 auto;

		.imageWrapper {
			width: 96px;
			height: 96px;
			border-radius: 0.5rem;
			overflow: hidden;
			position: relative;
			margin: 0 1rem;

			img {
				position: absolute;
				max-height: 100%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
`;

const Experience = ({ darkMode }) => {
	const [techData, setTechData] = useState([]);

	useEffect(() => {
		const fetchTech = () => {
			client
				.getEntries({
					content_type: 'tech',
					order: 'fields.id',
				})
				.then((res) => {
					setTechData(res.items);
				})
				.catch(console.error);
		};
		fetchTech();
	}, [setTechData]);

	return (
		<motion.div
			variants={containerVariants}
			initial='initial'
			animate='animate'
			exit='initial'
		>
			<div id='top'>
				<SectionStyled className={darkMode ? 'dark' : ''}>
					<h1 style={{ marginTop: '100px' }}>my projects</h1>
					<Projects darkMode={darkMode} />
				</SectionStyled>
			</div>

			<SectionStyled
				className={darkMode ? 'blue dark' : 'blue'}
				id='projects'
			>
				<h1>experience</h1>
				<MyExpData darkMode={darkMode} />
			</SectionStyled>

			<SectionStyled className={darkMode ? 'dark' : ''}>
				<h1>i've worked with</h1>
				<div className='stack-icons'>
					<Swiper
						slidesPerView={3.3}
						spaceBetween={30}
						freeMode={true}
						mousewheel={true}
						modules={[Mousewheel, FreeMode]}
						className='mySwiper'
					>
						{!!techData &&
							techData.map((tech) => {
								const {
									techName,
									id,
									logo: {
										fields: {
											file: { url },
										},
									},
								} = tech.fields;
								return (
									<SwiperSlide key={id}>
										<div className='imageWrapper'>
											<img src={url} alt={techName} />
										</div>
									</SwiperSlide>
								);
							})}
					</Swiper>
				</div>
			</SectionStyled>
		</motion.div>
	);
};

export default Experience;
