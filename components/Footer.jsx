import Socials from './Socials';

const Footer = () => {
	return (
		<footer className='bg-secondary py-12'>
			<div className='container mx-auto'>
				<div className='flex flex-col items-center justify-between'>
					<Socials
						containerStyles='flex gap-x-6 lg:mx-0 mb-4'
						iconStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary'
					/>

					<div className='text-muted-foreground'>
						Copyright &copy; Rajan Kumar. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
