import Footer from './footer/Footer'
import Nav from './Nav'
import WishList from './wishList/WishList'

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<WishList />
			<Footer />
		</>
	)
}
