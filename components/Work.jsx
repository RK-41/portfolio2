'use client';

import Link from 'next/link';
import { Button } from './ui/button';

// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ui/ProjectCard';

// data
import { projectData } from '@/app/projects/page';

const Work = () => {
	return (
		<section className='relative mb-12 lg:mb-48'>
			<div className='container mx-auto'>
				<div className=' max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:h-[400px] flex flex-col justify-center items-center lg:items-start'>
					<h2 className='section-title mb-4'>Latest Projects</h2>
					<p className='subtitle mb-8'>Check out my recent projects.</p>

					<Link href='/projects'>
						<Button>All Projects</Button>
					</Link>
				</div>

				{/* slider */}
				<div className='lg:max-w-[600px] xl:max-w-[1000px] lg:absolute right-10 top-0 cursor-pointer'>
					<Swiper
						className='h-[480px]'
						slidesPerView={1}
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
						}}
						spaceBetween={20}
						modules={[Pagination]}
						pagination={{ clickable: true }}
					>
						{/* showing only first 4 projects of the slide */}
						{projectData.slice(0, 4).map((project, index) => {
							return (
								<SwiperSlide key={index}>
									<ProjectCard project={project} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Work;
