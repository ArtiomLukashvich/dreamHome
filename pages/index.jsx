import Head from 'next/head'
import About from '../components/aboutUs/About'
import ContactUs from '../components/contactUs/ContactUs'
import Header from '../components/header/Header'
import MainContent from '../components/main/MainContent'
import Slider from '../components/slider/Slider'

export const getStaticProps = async () => {
	const response = await fetch('http://localhost:3000/api/houseItems/')
	const data = await response.json()

	if (!data) {
		return { notFound: true }
	}

	return {
		props: { houseItems: data },
	}
}

export default function Home({ houseItems }) {
	return (
		<>
			<Head>
				<title>Dream Home</title>
			</Head>
			<Header />
			<MainContent houseItems={houseItems} />
			<About />
			<Slider />
			<ContactUs />
		</>
	)
}
