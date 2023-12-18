import { BiSolidEdit } from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
const TodoAdd = (props) => {
  const { text, updateTodo, deleteTodo } = props

  return (
    <div className="flex justify-between w-3/6 border-2 border-slate-700 py-2 rounded-lg mt-8  px-4 ">
      <div className="mr-2 flex flex-row gap-2">
        {/* <input type="checkbox" className="flex" checked={isCompleted} onChange={toggleCompleted} /> */}
        <span>{text}</span>
      </div>
      <div className="flex ">
        <BiSolidEdit onClick={updateTodo} className="cursor-pointer mr-3" />
        <TiDeleteOutline onClick={deleteTodo} className="cursor-pointer" />
      </div>
    </div>
  )
}

export default TodoAdd
