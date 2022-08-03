import React from 'react'
import Button from '../Button'
import HouseItem from './HouseItem'

export const getStaticProps = async () => {
	console.log('work')

	const response = await fetch('http://localhost:3000/api/houseItems/')
	const data = await response.json()
	console.log(data)
	if (!data) {
		return { notFound: true }
	}

	return {
		props: { houseItems: data },
	}
}

const MainContent = ({ houseItems }) => {
	console.log(houseItems)
	return (
		<>
			<Button fun={getStaticProps}>Get props</Button>
			{houseItems?.map(item => (
				<HouseItem key={item.id} item={item} />
			))}
		</>
	)
}

export default MainContent
