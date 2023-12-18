import axios from 'axios'

const baseUrl = 'https://todo-app-mern-w7zd.onrender.com'
const getAllToDo = async (setToDo) => {
  try {
    const response = await axios.get(baseUrl)
    const { data } = response
    console.log('Todo:', data)
    setToDo(data)
  } catch (error) {
    console.error(`Error fetching data: ${error}`)
  }
}

const addToDo = async (text, setText, setToDo) => {
  try {
    const response = await axios.post(baseUrl, { text })
    const { data } = response
    console.log('Posted Todo:', data)
    setText('')
    getAllToDo(setToDo)
  } catch (error) {
    console.error(`Error fetching data: ${error}`)
  }
}

const updateToDo = async (toDoId, text, setToDo, setText, setIsUpdating) => {
  try {
    const response = await axios.patch(baseUrl, { _id: toDoId, text })
    const { data } = response
    console.log('Updated Todo:', data)
    setText('')
    setIsUpdating(false)

    getAllToDo(setToDo)
  } catch (error) {
    console.error(`Error fetching data: ${error}`)
  }
}

const deleteToDo = async (id, setToDo) => {
  try {
    await axios.delete(baseUrl, { data: { _id: id } })
    getAllToDo(setToDo)
  } catch (error) {
    console.error(`Error fetching data: ${error}`)
  }
}

export { getAllToDo, addToDo, updateToDo, deleteToDo }
