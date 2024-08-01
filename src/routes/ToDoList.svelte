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

<ul class="todo-list">
  {#each todos as todo (todo.id)}
    <ToDoListItem {todo} {onCompleteToDoTask} {onDeleteToDoTask} />
  {/each}
</ul>

<style>
  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 16px;
    padding-left: 0;
  }
</style>
