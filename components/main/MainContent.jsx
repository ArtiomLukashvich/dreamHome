import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Filter from './Filter'
import HouseItem from './HouseItem'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 20px;
	width: 80%;
	margin: 20px auto;
`

const MainContent = ({ houseItems }) => {
	return (
		<>
			<Filter />
			<Wrapper>
				{houseItems?.map(item => (
					<HouseItem key={item.id} item={item} />
				))}
			</Wrapper>
		</>
	)
}

export default MainContent
