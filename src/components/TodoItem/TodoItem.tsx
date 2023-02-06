import { useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { useDispatch } from 'react-redux'
import { addSelectedTask, removeSelectedTask, removeTask } from '../../store/todoSlice'
import { Checkbox } from '../Сheckbox/Сheckbox'

type TodoItemPropsType = {
  value: string
  isActive: boolean
  id: number
  selectedCount: number
  setSelectedCount: React.Dispatch<React.SetStateAction<number>>
}

export default function TodoItem(props: TodoItemPropsType) {
  const { id, selectedCount, setSelectedCount, value } = props
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false)

  const removeTodoTask = () => {
    dispatch(
      removeTask({
        todo: {
          id: props.id,
          value: props.value,
          isActive: props.isActive,
        },
      }),
    )
  }

  const onClickTodoItem = () => {
    if (!isChecked) {
      dispatch(addSelectedTask({ selectedTodoId: id }))
      setSelectedCount(selectedCount + 1)
    } else {
      dispatch(removeSelectedTask({ selectedTodoId: id }))
      setSelectedCount(selectedCount - 1)
    }
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex items-center justify-center mb-9" onClick={onClickTodoItem}>
      <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      <p className="w-full flex justify-between items-center  py-5 px-9 scale-[0.9] bg-purple-100 hover:scale-[1] hover:text-white hover:ml-2 text-[#001747] cursor-pointer transition duration-300 ease-in-out hover:bg-purple-500">
        {value}
        <TfiClose size={30} color="#fff" onClick={removeTodoTask} />
      </p>
    </div>
  )
}
