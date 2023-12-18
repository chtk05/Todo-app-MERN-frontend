import TodoAdd from '../component/TodoAdd'
import TodoAll from '../component/TodoAll'
import TodoView from '../component/TodoView'

const Home = () => {
  return (
    <div className="flex justify-between mx-auto w-5/6 py-10">
      <TodoView />
      <TodoAll />
    </div>
  )
}

export default Home
