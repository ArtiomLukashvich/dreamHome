import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

const Navbar = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: transparent;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
	padding: 10px;
`

const Logo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
`

const Navigation = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
`
const LinkItem = styled.a`
	user-select: none;
	position: relative;
	cursor: pointer;
	padding: 0 20px 20px 20px;
	:hover {
		::after {
			content: '';
			position: absolute;
			text-align: center;
			top: 8px;
			left: 0px;
			width: 8px;
			height: 8px;
			background-color: #ff9505;
			border-radius: 50%;
			transition: all 4s ease 2s;
		}
	}
`

const Nav = () => {
	return (
		<Navbar>
			<Link href='/'>
				<a>
					<Logo>
						<Image src={logo} alt='logo' width={45} height={30} />
						<p>Dream Home</p>
					</Logo>
				</a>
			</Link>
			<Navigation>
				<li>
					<Link href='/'>
						<LinkItem>Home</LinkItem>
					</Link>
				</li>
				<li>
					<LinkItem href='/'>About Us</LinkItem>
				</li>
				<li>
					<Link href='/' target='_blank'>
						<LinkItem>Other Projects</LinkItem>
					</Link>
				</li>
			</Navigation>
		</Navbar>
	)
}

export default Nav
