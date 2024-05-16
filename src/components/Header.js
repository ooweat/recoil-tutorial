import {useState} from 'react'
import {useSetRecoilState} from "recoil";
import {createTodo, todos} from "../state/todos";

function Header() {
  const [value, setValue] = useState('')

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  const setTodos = useSetRecoilState(todos)

  const handleAddTodo = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {

      if(value.trim() === '') return alert('내용을 입력해주세요')

      setTodos(todos => [...todos, createTodo(value)])
      setValue('')
    }
  }

  return (
      <header className="header">
        <h1>Recoil Todos</h1>
        <input className="new-todo" placeholder="What needs to be done?"
               value={value}
               onInput={handleInput}
               onKeyDown={handleAddTodo}
               autoFocus/>
      </header>
  )
}

export default Header
