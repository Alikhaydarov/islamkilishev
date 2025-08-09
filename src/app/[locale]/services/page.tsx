'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import loc3Image from '../../../components/images/20250731_0104_image.png'
import locImage from '../../../components/images/image copy.png'
import loc2Image from '../../../components/images/SPECIALIZED MMXM1.png'

const images = [loc2Image, locImage, loc3Image] // istalgancha rasm qo'shing
export default function Services() {
	const t = useTranslations('Services')

	// 🔁 Servislar ro'yxatini JSON'dan olish
	const serviceKeys = Object.keys(t.raw('items')) // Masalan: ["MMXM", "OTE", ...]
	const services = serviceKeys.map(key => {
		const rawService = t.raw(`items.${key}`) as {
			title: string
			price: string
			description: string[]
			link: string
		}

		return {
			title: rawService.title,
			price: rawService.price,
			description: Array.isArray(rawService.description)
				? rawService.description.filter(Boolean)
				: [],

			link: rawService.link,
		}
	})

	return (
		<div className='w-full py-12 px-4 text-white'>
			<h1 className='text-4xl font-bold text-center mb-12 sm:mt-16'>
				{t('title')}
			</h1>

			<div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<div
						key={index}
						className='border dark:text-white text-black border-gray-600 dark:bg-[#0f0f0f] rounded-xl p-6 flex flex-col justify-between hover:border-violet-500 transition-colors duration-300'
					>
						<Image
							src={images[index] || locImage} // fallback agar image topilmasa
							alt={service.title}
							width={300}
							height={86}
							className='mb-4 mx-auto'
						/>

						<h3 className='text-[22px] font-bold mb-1 text-center'>
							{service.title}
						</h3>
						<p className='text-[13px] mb-4 text-center'>{service.price}</p>

						<ul className='space-y-2 mt-auto mb-4'>
							{service.description.map((item, i) => (
								<li
									key={i}
									className='flex text-center justify-center items-start gap-2 text-[13px]'
								>
									<IoCheckmarkDoneCircle
										className='text-violet-500 mt-[2px]'
										size={16}
									/>
									<span>{item}</span>
								</li>
							))}
						</ul>

						{service.link && (
							<a
								href={service.link}
								target='_blank'
								rel='noopener noreferrer'
								className='text-violet-500 underline text-[13px] mb-2 block text-center hover:text-violet-400 transition-colors'
							>
								{t('learnMore')}
							</a>
						)}

						<button className='w-full py-2 text-[13px] font-medium rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 hover:opacity-90 transition-all duration-200'>
							{t('join')}
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
