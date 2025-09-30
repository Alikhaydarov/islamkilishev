'use client'
import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import logo from './../../src/components/images/image.png';
import logo2 from './../../src/components/images/image.png';
import LocaleSwitcher from './LocaleSwitcher'
import ThemeToggle from './ThemeToggle'

function Header() {
	const { scrollYProgress } = useScroll()
	const t = useTranslations('Header')
	const { theme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)

	// Block scroll when menu is open
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''
	}, [isOpen])

	return (
		<>
			<header className='backdrop-blur-2xl fixed top-0 z-50 w-full shadow-md'>
				<nav className='max-w-[85rem] mx-auto w-full px-6 py-4 flex items-center justify-between'>
					{/* Logo */}
					<Link href='/'>
						{theme === 'light' ? (
							<Image src={logo} alt='logo' height={50} />
						) : (
							<Image src={logo2} alt='logo' height={50} />
						)}
					</Link>

					{/* Mobile Toggle */}
					<div className='sm:hidden'>
						<button
							onClick={() => setIsOpen(true)}
							className='p-2 rounded-md border dark:border-gray-600 border-gray-300 bg-white dark:bg-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition'
						>
							<svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
							</svg>
						</button>
					</div>

					{/* Desktop Nav */}
					<div className='hidden sm:flex items-center gap-10'>
						<Link href='/about' className='text-gray-800 dark:text-white hover:text-gray-400 transition'>{t('link1')}</Link>
						<Link href='/services' className='text-gray-800 dark:text-white hover:text-gray-400 transition'>{t('link2')}</Link>
						<Link href='#' className='text-gray-800 dark:text-white hover:text-gray-400 transition'>{t('link3')}</Link>
						<Link href='#' className='text-gray-800 dark:text-white hover:text-gray-400 transition'>{t('link4')}</Link>
						<Link href='#' className='text-gray-800 dark:text-white hover:text-gray-400 transition'>{t('link5')}</Link>
						{/* <LocaleSwitcher /> */}
						<ThemeToggle />
					</div>
				</nav>

				{/* Scroll Progress */}
				<motion.div className='fixed top-full w-full left-0 h-1 bg-violet-800 origin-left' style={{ scaleX: scrollYProgress }} />
			</header>

			{/* Mobile Menu Overlay */}
			{isOpen && (
  <div className='fixed inset-0 z-[999] bg-black/50 backdrop-blur-2xl text-white flex flex-col justify-center items-center px-6'>

					{/* Close Button */}
					<button onClick={() => setIsOpen(false)} className='absolute top-6 right-6'>
						<svg className='h-7 w-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
						</svg>
					</button>

					{/* Menu Items */}
					<div className='flex flex-col gap-6 text-xl font-semibold text-center'>
						<Link onClick={() => setIsOpen(false)} href='/about' className='hover:text-gray-400'>{t('link1')}</Link>
						<Link onClick={() => setIsOpen(false)} href='/services' className='hover:text-gray-400'>{t('link2')}</Link>
						<Link onClick={() => setIsOpen(false)} href='#' className='hover:text-gray-400'>{t('link3')}</Link>
						<Link onClick={() => setIsOpen(false)} href='#' className='hover:text-gray-400'>{t('link4')}</Link>
						<Link onClick={() => setIsOpen(false)} href='#' className='hover:text-gray-400'>{t('link5')}</Link>
					</div>
		{/* Locale + Theme Toggle */}
		<div className='absolute bottom-6 flex gap-4'>
						{/* <LocaleSwitcher /> */}
						<ThemeToggle />
					</div>
					{/* Social Icons */}
					<div className='absolute bottom-24 flex flex-col items-center gap-4'>
						<p className='text-sm mt-2'>+998 90 228 25 08</p>
					</div>
				</div>
			)}
		</>
	)
}

export default Header
