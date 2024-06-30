import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './card.jsx';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './badge.jsx';

const ProjectCard = ({ project }) => {
	return (
		<Card className='group overflow-hidden relative'>
			<CardHeader className='p-0'>
				{/* Image */}
				<div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 work-project-bg bg-[110%] bg-no-repeat overflow-hidden'>
					<Image
						className='absolute bottom-0 shadow-2xl'
						src={project.image}
						width={300}
						height={300}
						alt='project image'
						priority
					/>

					{/* Buttons */}
					<div className='flex gap-x-4'>
						<Link
							href={project.link}
							className='bg-secondary w-[54px] h-[54px] rounded-sm flex items-center justify-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
							target='_blank'
						>
							<Link2Icon className='text-white' />
						</Link>
						<Link
							href={project.github}
							className='bg-secondary w-[54px] h-[54px] rounded-sm flex items-center justify-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
							target='_blank'
						>
							<Github className='text-white' />
						</Link>
					</div>
				</div>
			</CardHeader>
			<div className='h-full px-8 py-6'>
				<Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
					{project.category}
				</Badge>
				<h4 className='h4 mb-1'>{project.name}</h4>
				<p className='text-muted-foreground text-lg text-ellipsis'>
					{project.description}
				</p>
			</div>
		</Card>
	);
};

export default ProjectCard;
