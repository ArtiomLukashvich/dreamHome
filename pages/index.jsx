import Head from 'next/head'
import About from '../components/mainPage/aboutUs/About'
import ContactUs from '../components/mainPage/contactUs/ContactUs'
import Header from '../components/header/Header'
import MainContent from '../components/mainPage/main/MainContent'
import OtherProjects from '../components/mainPage/otherProjects/OtherProjects'

export default function Home() {
	return (
		<>
			<Head>
				<title>Dream Home</title>
			</Head>
			<Header />
			<MainContent />
			<About />
			<OtherProjects />
			<ContactUs />
		</>
	)
}
