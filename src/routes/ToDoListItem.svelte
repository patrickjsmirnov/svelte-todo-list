<script context="module" lang="ts">
  import type { ToDoTask } from '../types'
  export type OnCompleteToDoTask = (task: ToDoTask) => void
  export type OnDeleteToDoTask = (task: ToDoTask) => void
</script>

<script lang="ts">
  import Checkbox from '@smui/checkbox'
  import FormField from '@smui/form-field'
  import Button from '@smui/button'

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

<div class="todo-list-item">
  <li class="todo-item {todo.status === 'complete' ? 'completed' : ''}">
    <FormField>
      <Checkbox bind:checked on:click={handleCompleteToDoTask} />
    </FormField>
    {todo.title}
    <Button variant="raised" on:click={handleDeleteToDoTask}>delete</Button>
  </li>
</div>

<style>
</style>
