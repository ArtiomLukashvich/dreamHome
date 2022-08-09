import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import HouseItem from './HouseItem'
import { useSelector, useDispatch } from 'react-redux'
import { getHouseItems } from '../../features/housesSlice'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 20px;
	width: 80%;
	margin: 20px auto;
`

const MainContent = () => {
	const dispatch = useDispatch()
	const houseItems = useSelector(state => state.houses.filtered)

	useEffect(() => {
		dispatch(getHouseItems())
	}, [])

	return (
		<>
			<Filter />
			<Wrapper>
				{houseItems?.map(item => {
					return (
						<HouseItem
							key={item.id}
							item={item}
							color={item.favorite ? '#ff932d' : 'white'}
						/>
					)
				})}
			</Wrapper>
		</>
	)
}

export default MainContent
