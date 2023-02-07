import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
const store = configureStore({
  reducer: {
    todoSlice,
  },
})

export default store

type RootState = ReturnType<typeof store.getState>

export const selectTodoSlice = (state: RootState) => state.todoSlice
