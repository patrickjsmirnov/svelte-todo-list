<script lang="ts">
	import type { ToDoTask } from '../types'
	import Input from './Input.svelte'
	import ToDoList from './ToDoList.svelte'

	let todos: ToDoTask[] = [];

    function onAddToDoTask(toDoTask: ToDoTask) {
		todos = [...todos, toDoTask]
    }
</script>

<div class="todo-container">
	<Input {onAddToDoTask}/>
	<ToDoList todos={todos}/>
</div>

<style>
</style>
