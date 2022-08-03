import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import InfoContainer from './InfoContainer'

const ItemContent = styled.div`
	position: relative;
	background-color: #2c2b2b;
	border-radius: 10px;
	Image {
		width: 100%;
		height: 100%;
	}
`

const HouseItem = ({ item }) => {
	const { img } = item
	return (
		<ItemContent>
			<Image
				style={{ width: '100%', height: '100%' }}
				src={img}
				alt='Picture of the author'
				width={900}
				height={500}
				objectFit='cover'
			/>
			<InfoContainer item={item} />
		</ItemContent>
	)
}

export default HouseItem
