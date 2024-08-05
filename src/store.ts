import { writable } from 'svelte/store'

import type { ToDoTask } from './types'

function initializeTodos() {
  if (typeof localStorage !== 'undefined') {
    const storedTodos = localStorage.getItem('todos')

    return storedTodos ? JSON.parse(storedTodos) : []
  }

  return []
}

export const todos = writable<ToDoTask[]>(initializeTodos())

if (typeof localStorage !== 'undefined') {
  todos.subscribe((value) => {
    localStorage.setItem('todos', JSON.stringify(value))
  })
}

export const completedCount = writable<number>(0)

todos.subscribe((value) => {
  const count = value.filter((todo) => todo.status === 'complete').length
  completedCount.set(count)
})
