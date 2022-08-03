import React from 'react'

const HouseItem = ({ item }) => {
	return (
		<ul>
			{item.map(({ id, price, description }) => (
				<li key={id}>price</li>
			))}
		</ul>
	)
}

export default HouseItem
