'use client';

import { RiLinkedinFill, RiGithubFill, RiCodeFill } from 'react-icons/ri';

import Link from 'next/link';

const icons = [
	{
		path: 'https://linkedin.com/in/rajankumar1124',
		name: <RiLinkedinFill />,
	},
	{
		path: 'https://github.com/rk-41',
		name: <RiGithubFill />,
	},
	{
		path: 'https://leetcode.com/rk41',
		name: <RiCodeFill />,
	},
];

const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link href={icon.path} target='_blank' key={index}>
						<div className={`${iconStyles}`}>{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
