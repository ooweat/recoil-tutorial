import {useRecoilState, useSetRecoilState} from "recoil";
import * as state from '../state/todos'

function Footer() {
  const [filterType, setFilterType] = useRecoilState(state.filterType)

  const setTodos = useSetRecoilState(state.todos)
  const handleClearCompleted = () => {
    if (window.confirm('완료된 할 일을 모두 삭제하시겠습니까?') === false) {
      return
    }

    setTodos(todos => todos.filter(todo => !todo.done))
    alert('완료된 할 일을 모두 삭제했습니다.')
  }
  return (
      <footer className="footer">
        <span className="todo-count"><strong>0</strong> 개 남음</span>
        <ul className="filters">
          <li>
            <a className={filterType === "all" ? "selected" : ""}
               onClick={() => {
                 setFilterType("all")
               }}
               href="#/">전체</a>
          </li>
          <li>
            <a className={filterType === "active" ? "selected" : ""}
               onClick={() => {
                 setFilterType("active")
               }}
               href="#/active">할 일</a>
          </li>
          <li>
            <a className={filterType === "completed" ? "selected" : ""}
               onClick={() => {
                 setFilterType("completed")
               }}
               href="#/completed">완료</a>
          </li>
        </ul>
        <button className="clear-completed"
                onClick={handleClearCompleted}>완료된 할 일 삭제
        </button>
      </footer>
  )
}

export default Footer
