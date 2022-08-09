import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setFilterItems } from '../../features/housesSlice'

const Wrapper = styled.ul`
	width: 80%;
	margin: 20px auto;
	display: flex;
	list-style: none;
	li {
		user-select: none;
		cursor: pointer;
		margin-right: 10px;
		label {
			padding: 10px 20px;
			border: 1px solid #fff;
			border-radius: 10px;
		}
		input {
			display: none;
			:checked + label {
				color: #c9761e;
				border-color: #c9761e;
			}
		}
	}
`

const Filter = () => {
	const dispatch = useDispatch()

	const filterHandler = e => {
		dispatch(setFilterItems(e.target.value))
	}

	return (
		<Wrapper>
			<li>
				<input
					id='input1'
					type='radio'
					name='filter'
					value='all'
					defaultChecked
					onChange={e => {
						filterHandler(e)
					}}
				/>
				<label htmlFor='input1'>All</label>
			</li>
			<li>
				<input
					id='input2'
					type='radio'
					name='filter'
					value='studio'
					onChange={e => {
						filterHandler(e)
					}}
				/>
				<label htmlFor='input2'>Studio</label>
			</li>
			<li>
				<input
					id='input3'
					type='radio'
					name='filter'
					value='1'
					onChange={e => {
						filterHandler(e)
					}}
				/>
				<label htmlFor='input3'>1 Bed Room</label>
			</li>
			<li>
				<input
					id='input4'
					type='radio'
					name='filter'
					value='2'
					onChange={e => {
						filterHandler(e)
					}}
				/>
				<label htmlFor='input4'>2 Bed Room</label>
			</li>
		</Wrapper>
	)
}

export default Filter
