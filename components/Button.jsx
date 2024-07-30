import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
	background-color: #fffbfb;
	padding: 10px 30px;
	color: #000000;
	border-radius: 10px;
	border: transparent 1px solid;
	font-weight: 600;
	cursor: pointer;
`

const Button = ({ children, fun, type }) => {
	return (
		<ButtonStyle
			type={type}
			onClick={() => {
				fun
			}}
		>
			{children}
		</ButtonStyle>
	)
}

export default Button
