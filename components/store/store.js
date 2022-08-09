import { configureStore } from '@reduxjs/toolkit'
import housesSlice from '../features/housesSlice'

export const store = configureStore({
	reducer: {
		houses: housesSlice,
	},
})
