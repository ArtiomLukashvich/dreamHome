import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import InfoContainer from './InfoContainer'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addItemWishList } from '../../features/housesSlice'

const ItemContent = styled.div`
	position: relative;
	background-color: #2c2b2b;
	border-radius: 10px;
	Image {
		width: 100%;
		height: 100%;
	}
`

const Icon = styled(AiFillStar)`
	position: absolute;
	right: 10px;
	top: 10px;
	font-size: 25px;
	color: ${props => props.color || '#ffffff'};
	z-index: 10;
	cursor: pointer;
`

const HouseItem = ({ item, color }) => {
	const dispatch = useDispatch()

	return (
		<ItemContent>
			<Icon
				color={color}
				onClick={() => {
					dispatch(addItemWishList(item))
				}}
			/>
			<Image
				style={{ width: '100%', height: '100%' }}
				src={item.img}
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
