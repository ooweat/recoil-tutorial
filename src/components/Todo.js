import { useSetRecoilState } from 'recoil'
import { todos } from '../state/todos'

function Todo(props) {
  const {id, done, text} = props.todo

  const setTodos = useSetRecoilState(todos)
  const toggleTodo = checked => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id
          ? { ...todo, done: checked }
          : todo
    }))
  }

  const handleToggle = e => {
    const { checked } = e.target

    toggleTodo(checked)
  }

  return (
      <li className={ done ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked = {done}
          onChange={handleToggle}/>
          <label>{text}</label>
          <button className="destroy" />
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
  )
}

export default Todo
