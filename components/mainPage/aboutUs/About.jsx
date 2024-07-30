import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import aboutImage from '../../../public/aboutImage.png'
import Title from '../../Title'

const Wrapper = styled.div`
	user-select: none;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
`
const LeftSideInfo = styled.div`
	z-index: 1;
	width: 80%;
	margin: 0 10%;
	p {
		font-size: 22px;
		font-weight: 200;
		width: 80%;
		margin: 20px 0;
	}
`

const RightSideInfo = styled.div`
	z-index: 1;
	width: 20%;
	margin: 110px 5%;
	text-align: center;

	h4 {
		margin: 10px 0;
	}
	p {
		color: #fffbfb;
		margin-bottom: 60px;
	}
`

const About = () => {
	return (
		<Wrapper>
			<Image src={aboutImage} alt='aboutImage' layout='fill' />
			<LeftSideInfo>
				<Title>About Us</Title>
				<p>
					Dream Home is a gated community with a great location. Located
					downtown, you’re within walking distance of Parks, and the best
					shopping, dining and entertainment Getting around is a breeze, with
					easy access to freeways, buses and trolleys. . Laundry is available on
					premises.
				</p>
			</LeftSideInfo>
			<RightSideInfo>
				<Title>500+</Title>
				<h4>Projects</h4>
				<p>Over 500 lexury villas for“Home Away From Home” experience</p>
				<Title>40+</Title>
				<h4>Locations</h4>
				<p>luxury villas and private holiday homes, from all across</p>
				<Title>24/7</Title>
				<h4>Help</h4>
				<p>24/7 Help service for all customers to guide and support</p>
			</RightSideInfo>
		</Wrapper>
	)
}

export default About
