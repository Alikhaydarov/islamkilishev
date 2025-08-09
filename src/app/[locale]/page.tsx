import { useTranslations } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Hero from '../../components/hero'
import Portfolio from '../../components/projectpage'
import TeamCarousel from '../../components/TeamCarousel'
import Services from './services/page'
// import CircleText from '../../components/circl'

// import Services  from '@/components/services';
export default function Home() {
	const t = useTranslations('Index')
	return (
		<ThemeProvider attribute='class'>
			<div className=''>
				<Header />
				<Hero />
				{/* <CircleText/> */}
				<Services />
				{/* <Portfolio />
				<TeamCarousel /> */}
				{/* <Team/> */}
				<Footer />
			</div>
		</ThemeProvider>
	)
}
