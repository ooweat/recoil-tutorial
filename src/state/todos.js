import {atom, selector} from 'recoil'

let uniqId = 0

export const createTodo = text => ({
  id: ++uniqId,
  done: false,
  text,
})

export const todos = atom({
  key: 'todos',
  default: [
    createTodo('React 란?'),
    createTodo('Recoil 이란?'),
    createTodo('Router 란?'),
  ],
})

export const filterType = atom({
  key: 'filterType',
  default: 'all',
})

export const filteredTodos = selector({
  key: 'filteredTodos',
  get: ({get}) => {
    const list = get(todos)
    const filter = get(filterType)

    switch (filter) {
      case 'completed':
        return list.filter(todo => todo.done)
      case 'active':
        return list.filter(todo => !todo.done)
      default:
        return list
    }
  },
})
