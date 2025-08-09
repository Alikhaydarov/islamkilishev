'use client'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import imgU from '../components/images/Artboard 1@3x@3x.jpg'
import imgAli from '../components/images/VideoCapture_20250413-212704.jpg'
import imgOr from '../components/images/photo_2025-04-25_02-43-46.jpg'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../components/ui/carousel'

const TeamCarousel = () => {
	const teamMembers = [
		{
			name: 'Ali Khaydarov',
			role: 'Front-end Developer',
			imgSrc: imgAli.src,
			github: 'https://github.com/Alikhaydarov',
			telegram: 'https://t.me/al1kh_17',
			instagram: 'https://www.instagram.com/al1kh.17',
		},
		{
			name: 'Ulug`bek Ismoilov',
			role: 'Team-Lead',
			imgSrc: imgU.src,
			github: 'https://github.com/UPTUZOVER',
			telegram: 'https://t.me/samur0000',
			instagram: 'https://www.instagram.com/samur0770',
		},
		{
			name: 'Orzu Ashurqulov',
			role: 'Back-End Developer',
			imgSrc:
				imgOr.src,
			github: 'https://github.com/orzu0011',
			telegram: 'https://t.me/o_ashurqulov',
			instagram: 'https://www.instagram.com/_orzzu_',
		},
	]

	return (
		<div className='container px-10 lg:pr-8'>
			<h1 className='text-4xl font-bold text-center mb-8'>Our Team</h1>
			<Carousel className='relative border-0 shadow-none'>
				<CarouselPrevious className='bg-white dark:bg-slate-900 w-12 h-12 absolute left-[-0.3rem] top-1/2 transform -translate-y-1/2 z-10 p-2 shadow-lg' />
				<CarouselNext className='bg-white dark:bg-slate-900 w-12 h-12 absolute right-[-0.2rem] top-1/2 transform -translate-y-1/2 z-10 p-2 shadow-lg' />
				<CarouselContent className='flex border-transparent shadow-none'>
					{teamMembers.map((member, index) => (
						<CarouselItem
							key={index}
							className='lg:basis-1/5 max-sm:basis-full md:basis-1/3 h-100 border-transparent p-2'
						>
							<Card className='border-transparent w-full max-sm:w-full' style={{ boxShadow: 'none', border: 'none' }}>
								<CardHeader>
									<div className='relative group'>
										<img
											src={member.imgSrc}
											alt={member.name}
											className='rounded-xl object-cover lg:h-[260px] lg:w-[400px] max-sm:h-[350px] max-sm:w-[500px] 
												opacity-0 blur-sm scale-105 transition-all duration-700 ease-in-out'
											style={{ boxShadow: 'none', border: 'none' }}
											onLoad={(e) => {
												e.currentTarget.classList.remove('opacity-0', 'blur-sm', 'scale-105')
												e.currentTarget.classList.add('opacity-100', 'blur-0', 'scale-100')
											}}
										/>
										<div className='absolute rounded-xl inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<div className='flex space-x-6'>
												<a
													href={member.telegram}
													target='_blank'
													rel='noopener noreferrer'
													className='text-white text-2xl hover:text-blue-400'
												>
													<FaTelegram />
												</a>
												<a
													href={member.github}
													target='_blank'
													rel='noopener noreferrer'
													className='text-white text-2xl hover:text-black'
												>
													<FaGithub />
												</a>
												<a
													href={member.instagram}
													target='_blank'
													rel='noopener noreferrer'
													className='text-white text-2xl hover:text-red-600'
												>
													<FaInstagram />
												</a>
											</div>
										</div>
									</div>
									<CardTitle className='text-start pt-5 text-lg'>
										{member.name}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className='relative text-start max-sm:top-[-1em] pt-[-2rem] text-sm'>
										{member.role}
									</CardDescription>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default TeamCarousel
