import Image from 'next/image'
import React from 'react'
import Nav from '../Nav'
import image from '../../public/header_image.png'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	width: 100%;
	height: 100vh;
`

const HeaderImage = styled.div`
	width: 100%;
	height: 100vh;
`

const HeaderTitle = styled.h1`
	position: absolute;
	left: 10%;
	top: 30%;
	font-size: 70px;
	font-weight: 100;
	user-select: none;
	word-wrap: break-word;
	width: 40%;
	z-index: 1;
	span {
		color: #ff9325;
		font-weight: bold;
	}
`

const Header = () => {
	return (
		<HeaderContainer>
			<Nav />
			<HeaderImage>
				<Image alt='headImage' src={image} layout='fill' />
			</HeaderImage>

			<HeaderTitle>
				Find Your <span>Dream Home</span> @ San Diego
			</HeaderTitle>
		</HeaderContainer>
	)
}

export default Header
