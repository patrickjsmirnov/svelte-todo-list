<script context="module" lang="ts">
  import { createNewTask } from '$lib/images/utils/todo'
  import type { ToDoTask } from '../types'

  export type OnAddToDoTask = (task: ToDoTask) => void
</script>

<script lang="ts">
  import Textfield from '@smui/textfield'
  import Button from '@smui/button'

  export let onAddToDoTask: OnAddToDoTask
  let newTaskTitle = ''

  function handleAddToDoTask() {
    if (newTaskTitle.trim()) {
      const newToDoTask = createNewTask(newTaskTitle)

      onAddToDoTask?.(newToDoTask)
      newTaskTitle = ''
    }
  }
</script>

<form class="form">
  <Textfield
    class="textfield"
    variant="outlined"
    bind:value={newTaskTitle}
    label="Task text"
  />
  <Button
    class="button"
    variant="unelevated"
    color="primary"
    on:click={handleAddToDoTask}>Add</Button
  >
</form>

<style>
  .form {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .form > :global(.button) {
    height: 56px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .form > :global(.textfield) {
    flex: 1;
  }
</style>
