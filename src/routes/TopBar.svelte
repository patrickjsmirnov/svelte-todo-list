<script context="module" lang="ts">
  export type OnClearAllToDoTasks = () => void
  export type OnClearCompletedToDoTasks = () => void
</script>

<script lang="ts">
  import { todos, completedCount } from '../store'
  import Button from '@smui/button'

  export let onClearAllToDoTasks: OnClearAllToDoTasks
  export let onClearCompletedToDoTasks: OnClearCompletedToDoTasks
</script>

<div class="top-bar">
  <p>Task Done: {$completedCount} / {$todos.length}</p>
  <Button
    class="button"
    color="primary"
    variant="outlined"
    on:click={onClearAllToDoTasks}>Clear All</Button
  >
  <Button
    class="button"
    color="primary"
    variant="outlined"
    on:click={onClearCompletedToDoTasks}>Clear Completed</Button
  >
</div>

<style>
  .top-bar {
    display: flex;
    align-items: center;
    gap: 16px;
  }
</style>
