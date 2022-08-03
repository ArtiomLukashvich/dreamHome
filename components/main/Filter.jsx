import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
	width: 80%;
	margin: 20px auto;
	display: flex;
	list-style: none;
	li {
		cursor: pointer;
		margin-right: 10px;
		padding: 10px 20px;
		border: 1px solid #fff;
		border-radius: 10px;
		& :active {
			border: 1px solid #c9761e;
		}
	}
`

const Filter = () => {
	return (
		<Wrapper>
			<li active>All</li>
			<li>Studio</li>
			<li>1 Bed Room</li>
			<li>1 Bed Room</li>
		</Wrapper>
	)
}

export default Filter
