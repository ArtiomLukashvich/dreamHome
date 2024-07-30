import React from 'react'
import styled from 'styled-components'

const Text = styled.h3`
	color: #ff9505;
	font-weight: 600;
	font-size: 32px;
	user-select: none;
`

const Title = ({ children }) => {
	return <Text>{children}</Text>
}

export default Title
