import {useSetRecoilState} from 'recoil'
import {useState, useRef, useEffect} from 'react'
import {todos} from '../state/todos'

function Todo(props) {
  const {id, done, text} = props.todo
  const setTodos = useSetRecoilState(todos)
  const toggleTodo = checked => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id
          ? {...todo, done: checked}
          : todo
    }))
  }
  const editTodo = () => {
    const value = inputText.trim()

    if (value === '') {
      setInputText('')
      return
    }

    setTodos(todos => todos.map(todo => {
      return todo.id === id
          ? {...todo, text: value}
          : todo
    }))

    setIsEditing(false)
  }

  const handleToggle = e => {
    const {checked} = e.target

    toggleTodo(checked)
  }

  const handleRowClick = () => {
    toggleTodo(!done)
  }

  const handleDestroy = () => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }


  const [isEditing, setIsEditing] = useState(false)
  const [inputText, setInputText] = useState('')
  const editInputEl = useRef(null)

  useEffect(() => {
    if (isEditing) {
      editInputEl.current.focus()
    }
  }, [isEditing])

  const handleEditTextChange = e => {
    setInputText(e.target.value)
  }

  const classNames = []
  if (isEditing) {
    classNames.push('editing')
  }

  if (done) {
    classNames.push('completed')
  }
  const className = classNames.join(' ')

  const handleEditTextEnter = e => {
    if (e.key === 'Enter') {
      editTodo()
    } else if (e.key === 'Escape') {
      setInputText(text)
      setIsEditing(false)
    }
  }

  return (
      <li className={className} onClick={handleRowClick}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={done}
                 onChange={handleToggle}/>
          <label onDoubleClick={() => setIsEditing(true)}>{text}</label>
          <button className="destroy" onClick={handleDestroy}/>
        </div>
        <input className="edit" onInput={handleEditTextChange} value={inputText}
               onKeyDown={handleEditTextEnter}
               onBlur={editTodo}
               ref={editInputEl}/>
      </li>
  )
}

export default Todo
