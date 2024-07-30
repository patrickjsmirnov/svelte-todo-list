<script lang="ts">
	import type { ToDoTask } from '../types';

	export let todos: ToDoTask[] = [];
</script>

<div class="todo-list">
	<ul class="todo-list">
		{#each todos as todo (todo.id)}
			<li class="todo-item {todo.status === 'complete' ? 'completed' : ''}">
				{todo.title}
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
