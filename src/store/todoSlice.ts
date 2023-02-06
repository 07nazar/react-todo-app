import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  todos: TodoType[]
  selectedTodos: number[]
}

type TodoType = {
  value: string
  isActive: boolean
  id: number
}

type AddTodoActionPayloadType = {
  todo: TodoType
}
type selectTodoActionPayloadType = {
  selectedTodoId: number
}

const initialState: InitialStateType = {
  todos: [],
  selectedTodos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask(state: InitialStateType, action: PayloadAction<AddTodoActionPayloadType>) {
      state.todos.push(action.payload.todo)
    },
    removeTask(state: InitialStateType, action: PayloadAction<AddTodoActionPayloadType>) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.todo.id)
    },
    addSelectedTask(state: InitialStateType, action: PayloadAction<selectTodoActionPayloadType>) {
      state.selectedTodos.push(action.payload.selectedTodoId)
    },
    removeSelectedTask(
      state: InitialStateType,
      action: PayloadAction<selectTodoActionPayloadType>,
    ) {
      state.selectedTodos = state.selectedTodos.filter(
        (item) => item !== action.payload.selectedTodoId,
      )
    },

    clearAllSelectedTasks(state: InitialStateType) {
      const result = state.todos.filter((item) => {
        return !state.selectedTodos.some((item2) => item2 === item.id)
      })
      state.todos = result
      state.selectedTodos = []
    },
  },
})

export const { addTask, removeTask, clearAllSelectedTasks, addSelectedTask, removeSelectedTask } =
  todoSlice.actions

export default todoSlice.reducer
