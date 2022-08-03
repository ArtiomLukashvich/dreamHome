import Footer from './footer/Footer'
import Nav from './header/Nav'

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	)
}
