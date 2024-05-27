import {useRecoilValue, useRecoilState} from 'recoil'
import * as state from '../state/todos'

import Todo from './Todo'

function Main() {
  const filteredTodos = useRecoilValue(state.filteredTodos)
  const Todos = filteredTodos.map(todo => <Todo key={todo.id} todo={todo}/>)

  const [todos, setTodos] = useRecoilState(state.todos)
  const isAllDone = todos.every(todo => todo.done)
  const handleToggleAll = e => {
    const {checked} = e.target
    setTodos(todos => todos.map(todo => ({...todo, done: checked})))
  }

  return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"
               checked={isAllDone}
               onChange={handleToggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {Todos}
        </ul>
      </section>
  )
}

export default Main
