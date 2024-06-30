import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import Form from '@/components/Form';

const Contact = () => {
	return (
		<section>
			<div className='container mx-auto'>
				{/* Text & Illustration */}
				<div className='grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 lg:mb-24'>
					{/* Text */}
					<div className='flex flex-col justify-center'>
						<div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
							<span className='w-[30px] h-[2px] bg-primary'></span>
							Say Hello 👋
						</div>
						<h1 className='h1 max-x-md mb-8'>Let&apos;s Work Together</h1>
						<p className='subtitle max-w-[400px]'>
							And create something amazing.
						</p>
					</div>

					{/* Illustration */}
					<div className='dark:hidden lg:flex w-full contact-illustration-light  bg-contain bg-top bg-no-repeat'></div>
					<div className='hidden dark:lg:flex w-full contact-illustration-dark bg-contain bg-top bg-no-repeat'></div>
				</div>

				{/* Info text & Form */}
				<div className='grid lg:grid-cols-2 mb-24 lg:mb-32'>
					{/* Info text */}
					<div className='flex flex-col gap-y-4 lg:gap-y-14 mb-12 lg:mb-24 text-base lg:text-lg'>
						{/* Mail */}
						<div className='flex gap-x-4 items-center'>
							<MailIcon size={18} className='text-primary' />
							<div>goforsomethingnew@gmail.com</div>
						</div>

						{/* Phone */}
						<div className='flex gap-x-4 items-center'>
							<PhoneCall size={18} className='text-primary' />
							<div>+91 799 241 6138</div>
						</div>

						{/* Address */}
						<div className='flex gap-x-4 items-center'>
							<HomeIcon size={18} className='text-primary' />
							<div>Ranchi, Jharkhand, INDIA</div>
						</div>
					</div>

					{/* Form */}
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;
