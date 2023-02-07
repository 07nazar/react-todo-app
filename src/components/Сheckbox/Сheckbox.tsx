import { useEffect } from 'react'
import { MdDone } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectTodoSlice } from '../../store/store'

type CheckboxPropsType = {
  isChecked: boolean
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export function Checkbox(props: CheckboxPropsType) {
  const { isChecked, setIsChecked } = props

  const { selectedTodos } = useSelector(selectTodoSlice)

  useEffect(() => {
    if (selectedTodos.length === 0) {
      setIsChecked(false)
    }
  }, [selectedTodos, setIsChecked])

  return (
    <label
      className={`w-[32px] h-[32px] flex justify-center items-center ${
        isChecked && 'bg-[#00D8A7] rounded-[50%]'
      }`}>
      <input
        className="hidden"
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked)
        }}
      />
      {isChecked && <MdDone size={32} color="white" />}
    </label>
  )
}
