import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/todoSlice'

export default function Input() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onClickHandler = () => {
    if (value.length !== 0) {
      dispatch(addTask({ todo: { id: +new Date(), isActive: true, value } }))
      setValue('')
    }
  }

  return (
    <div className="w-full">
      <input
        className="w-full placeholder:text-base p-5 focus:outline-0 focus:bg-purple-50 transition-all"
        type="text"
        placeholder="Add new list item"
        value={value}
        onChange={(e) => onChangeHandler(e)}
      />
      <button
        className="absolute top-[50%] right-[7px] px-[24px] py-[12px] bg-blue-500 text-white text-lg translate-y-[-50%]"
        onClick={onClickHandler}>
        Add
      </button>
    </div>
  )
}
