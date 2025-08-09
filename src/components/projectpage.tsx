'use client'
import { useMemo, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

// Define the types for projects and categories

type ProjectCategory = 'all' | 'webSites' | 'bots' | 'crm'

const projects = {
	all: [
		{
			id: 1,
			title: 'Web-sayt',
			description: 'English-Test',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-09%2015-04-32.png?raw=true',
			link: 'https://english-test-one.vercel.app/', // Add link for "Barchasini ko\'rish"
		},
		{
			id: 2,
			title: 'Web-sayt',
			description: 'Online-Exam',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-09%2015-23-36.png?raw=true',
			link: 'http://13.40.123.211:9000/', // Add link for "Barchasini ko\'rish"
		},
		{
			id: 3,
			title: 'Web-sayt',
			description: 'Restaurant',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-09%2015-14-58.png?raw=true',
			link: 'https://restaurant-js-sigma.vercel.app/', // Add link for "Barchasini ko\'rish"
		},
		{
			id: 4,
			title: 'Web-sayt',
			description: 'Portfolio',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-10%2015-22-23.png?raw=true',
			link: 'https://ismoilov.vercel.app/', // Add link for "Barchasini ko\'rish"
		},
		{
			id: 5,
			title: 'Web-sayt',
			description: 'Tour-Travel',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-11%2015-24-08.png?raw=true',
			link: 'https://ismoilov.vercel.app/', // Add link for "Barchasini ko\'rish"
		},
	],
	webSites: [
		{
			id: 1,
			title: 'Web-sayt',
			description: 'English-Test',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-09%2015-04-32.png?raw=true',
			link: 'https://english-test-one.vercel.app/', // Add link for "Barchasini ko\'rish"
		},
		{
			id: 2,
			title: 'Web-sayt',
			description: 'Online-Exam',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-09%2015-23-36.png?raw=true',
			link: 'http://13.40.123.211:9000/', // Add link for "Barchasini ko\'rish"
		},
		{
			id: 3,
			title: 'Web-sayt',
			description: 'Restaurant',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-09%2015-14-58.png?raw=true',
			link: 'https://restaurant-js-sigma.vercel.app/', // Add link for "Barchasini ko\'rish"
		},
		{
			id: 4,
			title: 'Web-sayt',
			description: 'Portfolio',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-10%2015-22-23.png?raw=true',
			link: 'https://ismoilov.vercel.app/', // Add link for "Barchasini ko\'rish"
		},
		{
			id: 5,
			title: 'Web-sayt',
			description: 'Tour-Travel',
			category: 'web',
			imageUrl:
				'https://github.com/Alikhaydarov/restaurant.js/blob/main/img/Screenshot%20from%202025-04-11%2015-24-08.png?raw=true',
			link: 'https://ismoilov.vercel.app/', // Add link for "Barchasini ko\'rish"
		},
	],
	bots: [
		// Example of bot project
	],
	crm: [
		// Example of CRM project
	],
}

// Function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
	let currentIndex = array.length,
		randomIndex

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		]
	}

	return array
}

export default function Portfolio() {
	const [activeTab, setActiveTab] = useState<ProjectCategory>('all')

	// Memoize the shuffled projects to avoid re-shuffling on every render
	const shuffledProjects = useMemo(() => {
		return {
			all: shuffleArray([...projects.all]),
			webSites: shuffleArray([...projects.webSites]),
			bots: shuffleArray([...projects.bots]),
			crm: shuffleArray([...projects.crm]),
		}
	}, [])

	const handleTabClick = (tab: ProjectCategory) => {
		setActiveTab(tab)
	}

	return (
		<>
			<Fade cascade={true} direction='left' triggerOnce={true} duration={600}>
				<div className='container mx-auto p-16 mb-10'>
					<h1 className='text-4xl font-bold text-center mb-8'>Portfolio</h1>
					<div className='flex justify-center space-x-4 mb-6'>
						<button
							className={`px-4 py-2  font-semibold rounded ${
								activeTab === 'all'
									? 'bg-blue-600 text-white'
									: 'dark:bg-gray-800 bg-gray-200'
							}`}
							onClick={() => handleTabClick('all')}
						>
							All
						</button>
						<button
							className={`px-4 py-2 font-semibold rounded ${
								activeTab === 'webSites'
									? 'bg-blue-600 text-white'
									: 'dark:bg-gray-800 bg-gray-200'
							}`}
							onClick={() => handleTabClick('webSites')}
						>
							Web Sites
						</button>
						<button
							className={`px-4 py-2 font-semibold rounded ${
								activeTab === 'bots'
									? 'bg-blue-600 text-white'
									: 'dark:bg-gray-800 bg-gray-200'
							}`}
							onClick={() => handleTabClick('bots')}
						>
							Bots
						</button>
						<button
							className={`px-4 py-2 font-semibold rounded ${
								activeTab === 'crm'
									? 'bg-blue-600 text-white'
									: 'dark:bg-gray-800 bg-gray-200'
							}`}
							onClick={() => handleTabClick('crm')}
						>
							CRM
						</button>
					</div>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg'>
						{shuffledProjects[activeTab].map(project => (
							<div
								key={project.id}
								className='relative p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl overflow-hidden group'
								style={{
									backgroundImage: `url(${project.imageUrl})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									height: '250px',
								}}
							>
								<div className='flex flex-col h-full justify-end p-4'>
									<h3 className='text-xl font-extrabold z-30 text-[#2664eb]'>
										{project.title}
									</h3>
									<p className=' text-xl mt-2 font-extrabold z-30 text-white'>
										{project.description}
									</p>
									<div className='absolute backdrop-blur-md  cursor-pointer inset-0 flex flex-row  items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-50'>
										<a
											href={project.link}
											target='_blank'
											className='inline-block'
										>
											<h3 className='text-xl font-semibold text-white'>
												Barchasini ko'rish➡️
											</h3>
										</a>
									</div>
								</div>
								<div className='absolute z-1 inset-x-0 bottom-0 h-40 bg-gradient-to-t from-shadow-dark to-transparent'></div>
							</div>
						))}
					</div>
				</div>
			</Fade>
		</>
	)
}
