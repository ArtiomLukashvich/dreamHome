import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Title from '../Title'
import { ImPlay, ImTwitter, ImInstagram } from 'react-icons/im'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr 50px;
	padding-bottom: 20px;
	justify-items: center;
	div:last-child {
		grid-column-start: 1;
		grid-column-end: 4;
		align-self: end;
	}
`
const FirstContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		width: 50%;
		line-height: 1.5;
		font-size: 16px;
		text-align: center;
		margin-top: 20px;
	}
`

const List = styled.ul`
	list-style: none;
	li:first-child {
		font-weight: bold;
		font-size: 20px;
		margin-bottom: 10px;
	}
	li {
		margin-bottom: 5px;
	}
`

const Socials = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;

	li {
		cursor: pointer;
		margin: 10px 20px;
		text-align: center;
		:first-child {
			margin-left: 0;
		}
	}
`

const Footer = () => {
	return (
		<Wrapper>
			<FirstContainer>
				<Image src={logo} width={100} height={60} alt='logo' />
				<span>Dream Home</span>
				<p>
					Dream Home is a gated community with a great location. Located
					downtown, you’re within walking distance of Parks.
				</p>
			</FirstContainer>
			<List>
				<Title>Contact Us</Title>
				<li>Deam home villas San Diego, CA, USA</li>
				<li>025-777-3067</li>
				<li>info@dreamhome.com</li>
			</List>
			<div>
				<div>
					<Title>Follow us</Title>
					<Socials>
						<li>
							<ImInstagram />
						</li>
						<li>
							<ImPlay />
						</li>
						<li>
							<ImTwitter />
						</li>
					</Socials>
				</div>
			</div>
			<div>© 2022 Dandelion | All Rights Reserved</div>
		</Wrapper>
	)
}

export default Footer
