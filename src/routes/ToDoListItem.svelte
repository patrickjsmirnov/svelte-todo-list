<script context="module" lang="ts">
  import type { ToDoTask } from '../types'
  export type OnCompleteToDoTask = (task: ToDoTask) => void
  export type OnDeleteToDoTask = (task: ToDoTask) => void
</script>

<script lang="ts">
  import Checkbox from '@smui/checkbox'
  import FormField from '@smui/form-field'
  import IconButton, { Icon } from '@smui/icon-button'
  import { mdiDelete, mdiPencil } from '@mdi/js'

  export let onCompleteToDoTask: OnCompleteToDoTask
  export let onDeleteToDoTask: OnDeleteToDoTask
  export let todo: ToDoTask

  let checked = todo.status === 'complete' ?? false

  function handleCompleteToDoTask() {
    onCompleteToDoTask?.({
      ...todo,
      status: todo.status === 'complete' ? 'incomplete' : 'complete',
    })
    checked = !checked
  }

  function handleDeleteToDoTask() {
    onDeleteToDoTask?.(todo)
  }
</script>

<li class="todo-list-item">
  <FormField>
    <Checkbox bind:checked on:click={handleCompleteToDoTask} />
    <span class={todo.status === 'complete' ? 'completed' : ''} slot="label">
      {todo.title}
    </span>
  </FormField>
  <div class="action-buttons">
    <IconButton
      class="edit-button"
      on:click={() => {}}
      ripple={false}
      size="button"
    >
      <Icon tag="svg" viewBox="0 0 24 24">
        <path fill="currentColor" d={mdiPencil} />
      </Icon>
    </IconButton>
    <IconButton
      class="delete-button"
      on:click={handleDeleteToDoTask}
      ripple={false}
      size="button"
    >
      <Icon tag="svg" viewBox="0 0 24 24">
        <path fill="#b71c1c" d={mdiDelete} />
      </Icon>
    </IconButton>
  </div>
</li>

<style>
  .todo-list-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .action-buttons {
    display: none;
  }

  .todo-list-item:hover .action-buttons {
    display: inline-flex;
  }

  .completed {
    text-decoration: line-through;
  }
</style>
