<script context="module" lang="ts">
  import type { ToDoTask } from '../types'
  export type OnCompleteToDoTask = (task: ToDoTask) => void
  export type OnDeleteToDoTask = (task: ToDoTask) => void
</script>

<script lang="ts">
  import Checkbox from '@smui/checkbox'
  import FormField from '@smui/form-field'
  import IconButton from '@smui/icon-button'

  export let onCompleteToDoTask: OnCompleteToDoTask
  export let onDeleteToDoTask: OnDeleteToDoTask
  export let todo: ToDoTask

  let checked = todo.status === 'complete'

  function handleCompleteToDoTask() {
    onCompleteToDoTask?.(todo)
    checked = !checked
  }

  function handleDeleteToDoTask() {
    onDeleteToDoTask?.(todo)
  }
</script>

<li class="todo-list-item">
  <FormField>
    <Checkbox bind:checked on:click={handleCompleteToDoTask} />
  </FormField>
  <span class={todo.status === 'complete' ? 'completed' : 'test'}>
    {todo.title}
  </span>
  <IconButton
    class="material-icons"
    on:click={handleDeleteToDoTask}
    ripple={false}>delete</IconButton
  >
</li>

<style>
  .todo-list-item {
    display: flex;
    align-items: center;
  }

  .completed {
    text-decoration: line-through;
  }
</style>
