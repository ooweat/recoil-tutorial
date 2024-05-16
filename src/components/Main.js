import { useRecoilValue } from 'recoil'
import * as state from '../state/todos'

import Todo from './Todo'

function Main() {
  const todos = useRecoilValue(state.filteredTodos) //atom 구독
  const Todos = todos.map(todo => <Todo key={todo.id} todo={todo} />)

  return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          { Todos }
        </ul>
      </section>
  )
}


export default Main
