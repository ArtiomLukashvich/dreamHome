import React from 'react'
import styled from 'styled-components'
import Slider from '../../slider/Slider'
import Title from '../../Title'
import { media } from './Media'

const SLIDE_COUNT = media.length

const TitleText = styled.div`
	text-align: center;
	margin: 30px 0;
`
const OtherProjects = () => {
	return (
		<>
			<TitleText>
				<Title>Our Projects</Title>
				<p>Other projects by us in different locations </p>
				<Slider SLIDE_COUNT={SLIDE_COUNT} showHeader={true} />
			</TitleText>
		</>
	)
}

export default OtherProjects
