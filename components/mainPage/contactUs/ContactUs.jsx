import React from 'react'
import styled from 'styled-components'
import Button from '../../Button'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
`

const InfoContainer = styled.div`
	margin: 10% 0 10% 10%;
	width: 50%;
	line-height: 1;
	h2 {
		font-size: 64px;
		width: 70%;
		span {
			color: #ff9325;
		}
	}
	p {
		margin-top: 20px;
		font-size: 32px;
		font-weight: 100;
		width: 60%;
	}
`
const FormContainer = styled.div`
	margin: 10% 10% 10% 0;
	width: 40%;
	form {
		width: 100%;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		gap: 60px 10px;
		input {
			padding: 5px 0;
			border: none;
			border-bottom: 1px solid #fff;
			background-color: transparent;
			width: 100%;
			outline: none;
			:nth-child(5) {
				grid-column-start: 1;
				grid-column-end: 3;
			}
		}
		button {
			width: 50%;
		}
	}
`

const buttonHandler = e => {
	e.preventDefault()
}

const ContactUs = () => {
	return (
		<Wrapper>
			<InfoContainer>
				<h2>
					Did You Find Your <span>Dream Home?</span>
				</h2>
				<p>
					Thank you for getting in touch! if you find your dream home connect
					with us
				</p>
			</InfoContainer>
			<FormContainer>
				<form>
					<input type='text' placeholder='Your Name' />
					<input type='text' placeholder='Your Number' />
					<input type='text' placeholder='Your Name' />
					<input type='text' />
					<input type='text' placeholder='Message' />
					<Button type='submit' fun={e => buttonHandler(e)}>
						Submit
					</Button>
				</form>
			</FormContainer>
		</Wrapper>
	)
}

export default ContactUs
