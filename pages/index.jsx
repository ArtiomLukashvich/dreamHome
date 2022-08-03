import Head from 'next/head'
import About from '../components/aboutUs/About'
import ContactUs from '../components/contactUs/ContactUs'
import Header from '../components/header/Header'
import MainContent from '../components/main/MainContent'
import Slider from '../components/slider/Slider'

export default function Home() {
	return (
		<>
			<Head>
				<title>Dream Home</title>
			</Head>
			<Header />
			{/* <MainContent /> */}
			<About />
			<Slider />
			<ContactUs />
		</>
	)
}
