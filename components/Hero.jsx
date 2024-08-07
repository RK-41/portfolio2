import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
	RiBriefcase4Fill,
	RiTeamFill,
	RiTodoFill,
	RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
	return (
		<section className='py-12 lg:py-24 h-[84vh] bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
			<div className='container mx-auto'>
				<div className='flex justify-between gap-x-8'>
					{/* text */}
					<div className='flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left'>
						<div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
							Web Developer
						</div>

						<h1 className='h1'>Hello, my name is Rajan Kumar</h1>

						<p className='subtitle max-w-[490px] mx-auto lg:mx-0'>
							A passionate and detail-oriented web developer, specializing in
							creating responsive, user-friendly websites.
						</p>

						{/* buttons */}
						<div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12'>
							<Link href='/contact'>
								<Button className='gap-x-2'>
									Contact me <Send size={18} />
								</Button>
							</Link>

							<Link
								href='https://drive.google.com/file/d/1zTzQqVFEcgcHFp2CC-_tIt2cdYNf5z4B/view?usp=sharing'
								target='_blank'
							>
								<Button variant='secondary' className='gap-x-2'>
									Download CV <Download size={18} />
								</Button>
							</Link>
						</div>

						{/* socials */}
						<Socials
							containerStyles='flex gap-x-6 mx-auto lg:mx-0'
							iconStyles='text-foreground text-[32px] hover:text-primary transition-all'
						/>
					</div>

					{/* image */}
					<div className='hidden lg:flex xl:flex relative'>
						{/* badge */}
						{/* <Badge
							containerStyles='absolute top-[10%] -left-[8rem]'
							icon={<RiBriefcase4Fill />}
							endCountNum={3}
							badgeText='Years Of Experience'
						/>
						<Badge
							containerStyles='absolute top-[90%] -left-[5rem]'
							icon={<RiBriefcase4Fill />}
							endCountNum={6}
							endCountText='k'
							badgeText='Finished Projects'
						/>
						<Badge
							containerStyles='absolute top-[80%] left-[20rem]'
							icon={<RiBriefcase4Fill />}
							endCountNum={9}
							endCountText='k'
							badgeText='Happy Clients'
						/> */}

						<div className='w-[400px] h-[400px] bg-no-repeat absolute'></div>
						<DevImg
							containerStyles=' w-[400px] h-[400px] bg-no-repeat relative bg-bottom'
							imgSrc='/hero/RK.png'
						/>
					</div>
				</div>

				{/* icon */}
				<div className='hidden lg:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
					<RiArrowDownSLine className='text-3xl text-primary' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
