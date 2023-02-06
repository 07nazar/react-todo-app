import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodoSlice } from '../../store/store'
import { clearAllSelectedTasks } from '../../store/todoSlice'
import Input from '../Input/Input'
import TodoItem from '../TodoItem/TodoItem'

export default function App() {
  const { todos } = useSelector(selectTodoSlice)
  const dispatch = useDispatch()
  const [selectedCount, setSelectedCount] = useState(0)

  const clearAllSelectedTodos = () => {
    if (todos.length !== 0) {
      dispatch(clearAllSelectedTasks())
      setSelectedCount(0)
    }
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-3 ">
      <div className="max-w-[1000px] w-full max-h-full h-[90vh]  flex justify-start items-start flex-col bg-white  shadow-[0_0_4px_rgba(0,23,71,0.15)] rounded-[32px] lg:pt-8 lg:px-28 lg:pb-6 sm:pt-5 sm:px-10 sm:pb-5 md:pt-4 md:px-8 md:pb-4  ">
        <h1 className="text-[#11175E] text-5xl font-bold mb-8">Daily To Do List</h1>
        <div className="flex w-full relative mb-14 ">
          <Input />
        </div>
        <div className="flex flex-col w-full  overflow-y-auto overflow-x-hidden pr-12 grow">
          {todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                value={item.value}
                isActive={item.isActive}
                id={item.id}
                selectedCount={selectedCount}
                setSelectedCount={setSelectedCount}
              />
            )
          })}
        </div>
        <hr className="mb-6" />
        <div className="w-full flex justify-between">
          <button className="text-[#B1BACB]">{selectedCount} item selected</button>
          <button className="text-[#B1BACB]" onClick={clearAllSelectedTodos}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  )
}
