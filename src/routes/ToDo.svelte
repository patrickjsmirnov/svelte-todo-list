<script lang="ts">
  import type { ToDoTask } from '../types'
  import Input from './Input.svelte'
  import ToDoList from './ToDoList.svelte'

  let todos: ToDoTask[] = []
  let completedCount: number = 0

  $: completedCount = todos.filter((todo) => todo.status === 'complete').length

  function onAddToDoTask(toDoTask: ToDoTask) {
    todos = [toDoTask, ...todos]
  }

  function onCompleteToDoTask(toDoTask: ToDoTask) {
    todos = todos.map((todo) => {
      if (todo.id === toDoTask.id) {
        return {
          ...toDoTask,
          status: 'complete',
        }
      }

      return todo
    })
  }

  function onDeleteToDoTask(toDoTask: ToDoTask) {
    todos = todos.filter((todo) => todo.id !== toDoTask.id)
  }
</script>

<div class="todo">
  <p>Task Done: {completedCount} / {todos.length}</p>
  <Input {onAddToDoTask} />
  <ToDoList {todos} {onCompleteToDoTask} {onDeleteToDoTask} />
</div>

<style>
  .todo {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
