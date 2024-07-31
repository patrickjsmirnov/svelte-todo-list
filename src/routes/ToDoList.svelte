<script context="module" lang="ts">
  import type { ToDoTask } from '../types'
  export type OnCompleteToDoTask = (task: ToDoTask) => void
  export type OnDeleteToDoTask = (task: ToDoTask) => void
</script>

<script lang="ts">
  import ToDoListItem from './ToDoListItem.svelte'

  export let onCompleteToDoTask: OnCompleteToDoTask
  export let onDeleteToDoTask: OnDeleteToDoTask
  export let todos: ToDoTask[] = []
</script>

<div class="todo-list-container">
  <ul class="todo-list">
    {#each todos as todo (todo.id)}
      <ToDoListItem {todo} {onCompleteToDoTask} {onDeleteToDoTask} />
    {/each}
  </ul>
</div>

<style>
  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 16px;
  }
</style>
