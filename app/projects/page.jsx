'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ui/ProjectCard';

const projectData = [
	{
		image: '/work/cineFlix.png',
		category: 'vanilla js',
		name: 'Cine Flix',
		description: 'Cinema database website',
		link: 'https://main--cineflixwebsite.netlify.app/',
		github: 'https://github.com/RK-41/vsis-internship-task4',
	},
	{
		image: '/work/taskManager.png',
		category: 'react js',
		name: 'Task Manager',
		description: 'A web app to keep track of various tasks',
		link: 'https://task-manager-five-jade.vercel.app/',
		github: 'https://github.com/RK-41/task-manager',
	},
	{
		image: '/work/digIt.png',
		category: 'next js',
		name: 'Dig IT',
		description: 'Website for IT solution providing agency',
		link: 'https://dig-it-eta.vercel.app/',
		github: 'https://github.com/RK-41/dig-it',
	},
	{
		image: '/work/shopWay.png',
		category: 'fullstack',
		name: 'ShopWay',
		description: 'E-commerce website',
		link: 'https://shopway-aw74.onrender.com/',
		github: 'https://github.com/RK-41/shopway',
	},
];

// Removing category duplicates
const uniqueCategories = [
	'all projects',
	...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
	const [categories, setCategories] = useState(uniqueCategories);
	const [category, setCategory] = useState('all projects');

	const filteredProjects = projectData.filter((project) => {
		return category === 'all projects'
			? project
			: project.category === category;
	});

	return (
		<section className='min-h-screen pt-12'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 lg:mb-16 text-center mx-auto'>
					My Projects
				</h2>

				{/* Tabs */}
				<Tabs defaultValue={category} className='mb-24 lg:mb-48'>
					<TabsList className='w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
						{categories.map((category, index) => {
							return (
								<TabsTrigger
									key={index}
									value={category}
									className='capitalize w-[166px] md:w-auto'
									onClick={() => setCategory(category)}
								>
									{category}
								</TabsTrigger>
							);
						})}
					</TabsList>

					{/* Tabs Content */}
					<div className='text-lg lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
						{filteredProjects.map((project, index) => {
							return (
								<TabsContent key={index} value={category}>
									<ProjectCard project={project} />
								</TabsContent>
							);
						})}
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default Projects;
