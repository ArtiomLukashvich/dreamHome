import React from 'react'
import styled from 'styled-components'
import Button from '../../Button'
import Title from '../../Title'

const Wrapper = styled.div`
	margin: 20px;
`

const InfoPrice = styled.div`
	display: flex;
	justify-content: space-between;
`

const InfoHouseContainer = styled.ul`
	user-select: none;
	list-style: none;
	display: flex;
	border-radius: 10px;
	border: 1px solid #fff;
	margin-top: 10px;
	li {
		text-align: center;
		flex-grow: 1;
		padding: 10px 0;
		:not(:first-child) {
			border-left: 1px solid #fff;
		}
	}
`

const InfoContainer = ({ item }) => {
	const { price, description, id, img } = item
	const { bath, bedrooms, roomArea } = description
	return (
		<Wrapper>
			<InfoPrice>
				<Title>{price}$</Title>
				<Button>View Details</Button>
			</InfoPrice>
			<InfoHouseContainer>
				<li>{bedrooms} bedrooms</li>
				<li>{bath} bath</li>
				<li>{roomArea} sq ft</li>
			</InfoHouseContainer>
		</Wrapper>
	)
}

export default InfoContainer
