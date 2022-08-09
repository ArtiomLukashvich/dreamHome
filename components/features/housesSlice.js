import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const initialState = {
	houses: [],
	filter: 'all',
	filtered: [],
	wishList: [],
	showWishList: false,
}

//! correct mark of favorite on house items

export const getHouseItems = createAsyncThunk(
	'posts/getHouseItems',
	async (_, { rejectWithValue, dispatch }) => {
		const response = await fetch('http://localhost:3000/api/houseItems')
		const data = await response.json()
		dispatch(setHouseItems(data))
	}
)

const housesSlice = createSlice({
	name: 'houses',
	initialState,
	reducers: {
		setHouseItems: (state, action) => {
			return {
				...state,
				houses: action.payload,
				filter: 'all',
				filtered: action.payload,
			}
		},
		setFilterItems: (state, action) => {
			if (action.payload === 'all') {
				return {
					...state,
					filter: action.payload,
					filtered: state.houses,
				}
			}
			if (isNaN(action.payload)) {
				const newItems = state.houses.filter(
					item => item.typeOfHouse === action.payload
				)
				return { ...state, filter: action.payload, filtered: newItems }
			} else {
				const newItems = state.houses.filter(
					item => item.description.bedrooms === +action.payload
				)
				return { ...state, filter: action.payload, filtered: newItems }
			}
		},
		addItemWishList: (state, action) => {
			const toggleFavorite = state.filtered.find(
				item => item.id === action.payload.id
			)
			toggleFavorite.favorite = !toggleFavorite.favorite
			toggleFavorite.favorite
				? state.wishList.push(action.payload)
				: (state.wishList = state.wishList.filter(
						item => item.id !== action.payload.id
				  ))
		},
		removeItemFromWishList: (state, action) => {
			const toggleFavorite = state.filtered.find(
				item => item.id === action.payload
			)
			toggleFavorite.favorite = false
			state.wishList = state.wishList.filter(item => item.id !== action.payload)
		},
		setOpenWishList: state => {
			return {
				...state,
				showWishList: true,
			}
		},
		setCloseWishList: state => {
			return {
				...state,
				showWishList: false,
			}
		},
	},
	extraReducers: {
		[getHouseItems.fulfilled]: () => console.log('getHouseItems >>> fulfilled'),
		[getHouseItems.pending]: () => console.log('getHouseItems >>> pending'),
		[getHouseItems.rejected]: () => console.log('getHouseItems >>> rejected'),
	},
})

export const {
	setHouseItems,
	setFilterItems,
	addItemWishList,
	removeItemFromWishList,
	setOpenWishList,
	setCloseWishList,
} = housesSlice.actions
export default housesSlice.reducer
