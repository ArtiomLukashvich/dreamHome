import Image from 'next/image'
import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeItemFromWishList } from '../features/housesSlice'

const RemoveIcon = styled(AiFillDelete)`
	font-size: 30px;
	position: absolute;
	right: 10px;
	bottom: 10px;
	padding: 5px;
	border: 1px solid #fff;
	border-radius: 50%;
`

const ListItem = ({ item }) => {
	const dispatch = useDispatch()
	return (
		<>
			<div>
				<Image src={item.img} width={120} height={120} objectFit='cover' />
			</div>
			<div>
				<p>{item.title}</p>
				<p> {item.price}</p>
			</div>
			<RemoveIcon
				onClick={e => {
					e.preventDefault()
					dispatch(removeItemFromWishList(item.id))
				}}
			/>
		</>
	)
}

export default ListItem
