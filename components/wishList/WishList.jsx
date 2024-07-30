import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillCloseCircle } from 'react-icons/ai'
import ListItem from './ListItem'
import { setCloseWishList, setOpenWishList } from '../features/housesSlice'
import { MdFavorite } from 'react-icons/md'

const Wrapper = styled.ul`
	list-style: none;
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: 400px;
	background-color: #2c2b2b;
	overflow-y: auto;
	z-index: 12;
	border-radius: 10px;
	padding: 10px;
	transition-delay: 0.5s;
	li {
		position: relative;
		display: flex;
		border-bottom: 1px solid #fff;
		cursor: pointer;
		:not(:first-child) {
			margin-top: 10px;
		}
		p {
			margin: 10px 40px;
			font-size: 20px;
		}
	}
`

const CloseList = styled(AiFillCloseCircle)`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 25px;
	z-index: 15;
`

const FavoriteIcon = styled.div`
	width: 50px;
	height: 50px;
	position: fixed;
	text-align: center;
	border-radius: 50%;
	cursor: pointer;
	bottom: 20px;
	right: 20px;
	font-size: 40px;
	background-color: #2c2b2b;
	line-height: 1.5;
`

const WishList = () => {
	const dispatch = useDispatch()
	const { showWishList, wishList } = useSelector(state => state.houses)

	return (
		<>
			{showWishList ? (
				<Wrapper>
					<CloseList
						onClick={() => {
							dispatch(setCloseWishList())
						}}
					/>
					{wishList.length !== 0 ? (
						wishList?.map(item => (
							<li key={item.id}>
								<ListItem item={item} />
							</li>
						))
					) : (
						<p>Wish list is empty</p>
					)}
				</Wrapper>
			) : (
				<FavoriteIcon onClick={() => dispatch(setOpenWishList())}>
					<MdFavorite />
				</FavoriteIcon>
			)}
		</>
	)
}

export default WishList
