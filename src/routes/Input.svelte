<script context="module" lang="ts">
  import { createNewTask } from '$lib/images/utils/todo'
  import type { ToDoTask } from '../types'

  export type OnAddToDoTask = (task: ToDoTask) => void
</script>

<script lang="ts">
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

<div class="add-new-task-input">
  <form>
    <input type="text" bind:value={newTaskTitle} />
    <button on:click={handleAddToDoTask}> Add </button>
  </form>
</div>

<style>
</style>
