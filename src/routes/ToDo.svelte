<script lang="ts">
  import type { ToDoTask } from '../types'
  import Input from './Input.svelte'
  import ToDoList from './ToDoList.svelte'
  import { todos, completedCount } from '../store'

  function onAddToDoTask(toDoTask: ToDoTask) {
    todos.update((current) => [toDoTask, ...current])
  }

  function onCompleteToDoTask(toDoTask: ToDoTask) {
    console.log('toDoTask = ', toDoTask)
    todos.update((current) =>
      current.map((todo) => {
        if (todo.id === toDoTask.id) {
          return {
            ...toDoTask,
            status: toDoTask.status,
          }
        }
        return todo
      }),
    )
  }

  function onDeleteToDoTask(toDoTask: ToDoTask) {
    todos.update((current) => current.filter((todo) => todo.id !== toDoTask.id))
  }
</script>

<div class="todo">
  <p>Task Done: {$completedCount} / {$todos.length}</p>
  <Input {onAddToDoTask} />
  <ToDoList todos={$todos} {onCompleteToDoTask} {onDeleteToDoTask} />
</div>

<style>
  .todo {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
