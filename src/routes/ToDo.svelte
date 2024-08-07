<script lang="ts">
  import type { ToDoTask } from '../types'
  import Input from './Input.svelte'
  import ToDoList from './ToDoList.svelte'
  import TopBar from './TopBar.svelte'
  import { todos } from '../store'

  function handleAddToDoTask(toDoTask: ToDoTask) {
    todos.update((current) => [toDoTask, ...current])
  }

  function handleCompleteToDoTask(toDoTask: ToDoTask) {
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

  function handleDeleteToDoTask(toDoTask: ToDoTask) {
    todos.update((current) => current.filter((todo) => todo.id !== toDoTask.id))
  }

  function handleClearAllToDoTasks() {
    todos.update(() => [])
  }

  function handleClearCompletedToDoTasks() {
    todos.update((current) =>
      current.filter((todo) => todo.status === 'incomplete'),
    )
  }
</script>

<div class="todo">
  <TopBar
    onClearAllToDoTasks={handleClearAllToDoTasks}
    onClearCompletedToDoTasks={handleClearCompletedToDoTasks}
  />
  <Input onAddToDoTask={handleAddToDoTask} />
  <ToDoList
    todos={$todos}
    onCompleteToDoTask={handleCompleteToDoTask}
    onDeleteToDoTask={handleDeleteToDoTask}
  />
</div>

<style>
  .todo {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
