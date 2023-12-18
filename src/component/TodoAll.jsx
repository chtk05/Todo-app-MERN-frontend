import { useEffect, useState } from 'react'
import TodoAdd from './TodoAdd'
import { addToDo, deleteToDo, getAllToDo, updateToDo } from '../utils/TodoAPI'

const TodoAll = () => {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState('')

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])
  const updateTodo = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="w-4/6 px-8 py-8 mt-12">
      <h1 className="text-3xl font-bold underline">To Do List</h1>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter task here"
          className=" w-3/6 border-b-2 border-slate-700 px-4 py-2  "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="ml-4 border-2 px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
          onClick={
            isUpdating
              ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)
          }
        >
          {isUpdating ? 'Update' : 'Add'}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        {toDo.map((item) => (
          <TodoAdd
            key={item._id}
            text={item.text}
            updateTodo={() => updateTodo(item._id, item.text)}
            deleteTodo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoAll
