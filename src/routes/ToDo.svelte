<script lang="ts">
  import type { ToDoTask } from '../types'
  import Input from './Input.svelte'
  import ToDoList from './ToDoList.svelte'

  let todos: ToDoTask[] = []

  function onAddToDoTask(toDoTask: ToDoTask) {
    todos = [toDoTask, ...todos]
  }

  function onCompleteToDoTask(toDoTask: ToDoTask) {
    const updatedTodos = todos.filter((todo) => todo.id !== toDoTask.id)
    todos = [...updatedTodos, toDoTask]
  }

  function onDeleteToDoTask(toDoTask: ToDoTask) {
    const updatedTodos = todos.filter((todo) => todo.id !== toDoTask.id)
    todos = todos.filter((todo) => todo.id !== toDoTask.id)
  }
</script>

<div class="todo-container">
  <Input {onAddToDoTask} />
  <ToDoList {todos} {onCompleteToDoTask} {onDeleteToDoTask} />
</div>

<style>
</style>
