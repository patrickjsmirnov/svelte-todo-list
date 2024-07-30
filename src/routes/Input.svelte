<script context="module" lang="ts">
    import type { ToDoTask } from '../types';
    export type OnAddToDoTask = (task: ToDoTask) => void;
</script>

<script lang="ts">
    export let onAddToDoTask: OnAddToDoTask;
    let newTaskTitle = '';

    function handleAddToDoTask() {
        if (newTaskTitle.trim()) {
            const newToDoTask: ToDoTask = {
			    id: String(Date.now()),
			    title: newTaskTitle,
			    status: 'incomplete',
		    }

            onAddToDoTask?.(newToDoTask);
            newTaskTitle = '';
        }
    }
</script>

<div class="add-new-task-input">
	<input type="text" bind:value={newTaskTitle}/>
	<button on:click={handleAddToDoTask}>
		Add
	</button>
</div>

<style>
</style>
