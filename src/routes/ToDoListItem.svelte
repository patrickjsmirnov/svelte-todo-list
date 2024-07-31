<script context="module" lang="ts">
  import type { ToDoTask } from '../types'
  export type OnCompleteToDoTask = (task: ToDoTask) => void
  export type OnDeleteToDoTask = (task: ToDoTask) => void
</script>

<script lang="ts">
  export let onCompleteToDoTask: OnCompleteToDoTask
  export let onDeleteToDoTask: OnDeleteToDoTask
  export let todo: ToDoTask

  let isChecked = todo.status === 'complete'

  function handleCompleteToDoTask() {
    onCompleteToDoTask?.(todo)
  }

  function handleDeleteToDoTask() {
    onDeleteToDoTask?.(todo)
  }
</script>

<div class="todo-list-item">
  <li class="todo-item {todo.status === 'complete' ? 'completed' : ''}">
    <input
      bind:checked={isChecked}
      on:change={handleCompleteToDoTask}
      type="checkbox"
    />
    {todo.title}
    <button on:click={handleDeleteToDoTask}> delete </button>
  </li>
</div>

<style>
</style>
