import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneCall,
	GraduationCap,
	Calendar,
	Briefcase,
} from 'lucide-react';

const infoData = [
	{
		icon: <User2 size={20} />,
		text: 'Rajan Kumar',
	},
	// {
	// 	icon: <PhoneCall size={20} />,
	// 	text: '+9179...',
	// },
	{
		icon: <MailIcon size={20} />,
		text: 'goforsomethingnew@gmail.com',
	},
	// {
	// 	icon: <Calendar size={20} />,
	// 	text: 'Born on 18 Jun, 2000',
	// },
	{
		icon: <GraduationCap size={20} />,
		text: 'B.Tech CSE (2024)',
	},
	{
		icon: <HomeIcon size={20} />,
		text: 'Ranchi, Jharkhand, India',
	},
];

const qualificationData = [
	{
		title: 'education',
		data: [
			{
				university: 'Sarala Birla University',
				qualification: 'Bachelor of Technology',
				duration: '2020-2024',
			},
		],
	},
	{
		title: 'experience',
		data: [
			{
				company: 'VeriTech Software IT Services',
				role: 'Web Developer Intern',
				duration: 'May 2024 - June 2024',
			},
			// {
			// 	company: 'Google',
			// 	role: 'SDE 1',
			// 	duration: '2025-current',
			// },
		],
	},
];

const skillData = [
	{
		title: 'skills',
		data: [
			{
				name: 'HTML, CSS, JavaScript, TypeScript, C++, Python',
			},
			{
				name: 'ReactJS, NextJS, ReduxJS',
			},
			{
				name: 'NodeJS, ExpressJS',
			},
			{
				name: 'MongoDB, Mongoose, Firebase',
			},
			{
				name: 'Git, GitHub',
			},
		],
	},
	{
		title: 'tools',
		data: [
			{
				imgPath: '/about/vscode.svg',
			},
			{
				imgPath: '/about/git.svg',
			},
			{
				imgPath: '/about/postman.svg',
			},
		],
	},
];

const About = () => {
	const getData = (arr, title) => {
		return arr.find((item) => item.title === title);
	};
	// console.log(getData(qualificationData, 'education'));

	return (
		<section className='xl:h-[860px] pb-12 xl:py-24'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
					About me
				</h2>

				<div className='flex flex-col xl:flex-row'>
					{/* image */}
					{/* <div className='hidden xl:flex flex-1 relative'>
						<DevImg
							containerStyles='w-[505px] h-[505px] bg-no-repeat relative'
							imgSrc='/hero/RK.png'
						/>
					</div> */}

					{/* tabs */}
					<div className='flex-1'>
						<Tabs defaultValue='personal'>
							<TabsList className='w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border mx-auto'>
								<TabsTrigger className='w-[162px] lg:w-auto' value='personal'>
									Personal Info
								</TabsTrigger>
								<TabsTrigger
									className='w-[162px] lg:w-auto'
									value='qualification'
								>
									Qualification
								</TabsTrigger>
								<TabsTrigger className='w-[162px] lg:w-auto' value='skills'>
									Skills
								</TabsTrigger>
							</TabsList>

							{/* tabs content */}
							<div className='text-lg mt-12 lg:mt-8'>
								{/* personal tab */}
								<TabsContent value='personal'>
									<div className='text-center lg:text-left'>
										<h3 className='h3 mb-4'>An Aspiring Developer</h3>
										<p className='subtitle max-w-xl mx-auto lg:mx-0'>
											I specialize in crafting intuitive websites with
											cutting-edge technology, delivering dynamic and engaging
											user experience.
										</p>

										{/* icons */}
										<div className='grid lg:grid-cols-2 gap-4 mb-12'>
											{infoData.map((item, index) => {
												return (
													<div
														className='flex items-center gap-x-4 mx-auto lg:mx-0'
														key={index}
													>
														<div className='text-primary'>{item.icon}</div>
														<div>{item.text}</div>
													</div>
												);
											})}
										</div>

										{/* languages */}
										<div className='flex flex-col gap-y-2'>
											<div className='text-primary'>Language Skills</div>
											<div className='border-b border-border'></div>
											<div>English, Hindi</div>
										</div>
									</div>
								</TabsContent>

								{/* qualification tab */}
								<TabsContent value='qualification'>
									<div className='text-center lg:text-left'>
										<h3 className='h3 mb-4'>My Journey So Far</h3>
										<p className='subtitle max-w-xl mx-auto lg:mx-0'></p>

										{/* experience & education wrapper */}
										<div className='grid md:grid-cols-2 gap-y-8'>
											{/* experience */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary'>
													<Briefcase />
													<h4 className='capitalize font-medium'>
														{getData(qualificationData, 'experience').title}
													</h4>
												</div>

												{/* list */}
												<div className='flex flex-col gap-y-8'>
													{getData(qualificationData, 'experience').data.map(
														(item, index) => {
															const { company, role, duration } = item;
															return (
																<div className='flex gap-x-8 group' key={index}>
																	<div className='h-[84px] w-[1px] bg-border relative ml-2'>
																		<div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
																	</div>

																	<div>
																		<div className='font-semibold text-xl leading-none mb-2'>
																			{company}
																		</div>
																		<div className='text-lg leading-none text-muted-foreground mb-4'>
																			{role}
																		</div>
																		<div>{duration}</div>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>

											{/* education */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary'>
													<GraduationCap size={28} />
													<h4 className='capitalize font-medium'>
														{getData(qualificationData, 'education').title}
													</h4>
												</div>

												{/* list */}
												<div className='flex flex-col gap-y-8'>
													{getData(qualificationData, 'education').data.map(
														(item, index) => {
															const { university, qualification, duration } =
																item;
															return (
																<div className='flex gap-x-8 group' key={index}>
																	<div className='h-[84px] w-[1px] bg-border relative ml-2'>
																		<div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
																	</div>

																	<div>
																		<div className='font-semibold text-xl leading-none mb-2'>
																			{university}
																		</div>
																		<div className='text-lg leading-none text-muted-foreground mb-4'>
																			{qualification}
																		</div>
																		<div>{duration}</div>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>

								{/* skills tab */}
								<TabsContent value='skills'>
									<div className='text-center lg:text-left'>
										<h3 className='h3 mb-8'>What I Use Everyday</h3>

										{/* skills */}
										<div className='mb-16'>
											<h4 className='text-xl font-semibold mb-2'>Skills</h4>
											<div className='border-b border-border mb-4'></div>

											{/* skill list */}
											<div>
												{getData(skillData, 'skills').data.map(
													(item, index) => {
														const { name } = item;
														return (
															<div
																className='w-2/4 text-center lg:text-left mx-auto lg:mx-0'
																key={index}
															>
																<div>{name}</div>
															</div>
														);
													}
												)}
											</div>
										</div>

										{/* tools */}
										<div>
											<h4 className='text-xl font-semibold mb-2 lg:text-left'>
												Tools
											</h4>
											<div className='border-b border-border mb-4'></div>

											{/* tools list */}
											<div className='flex gap-x-8 justify-center lg:justify-start'>
												{getData(skillData, 'tools').data.map((item, index) => {
													const { imgPath } = item;
													return (
														<div key={index}>
															<Image
																src={imgPath}
																width={48}
																height={48}
																alt='img'
																className='dark:invert'
															/>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
