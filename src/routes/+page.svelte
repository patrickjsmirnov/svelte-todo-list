<script>
  import ToDo from './ToDo.svelte'
</script>

<svelte:head>
  <title>To Do List</title>
  <meta name="description" content="To Do list" />
</svelte:head>

<section>
  <h1>To Do List</h1>
  <ToDo />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
  }

  h1 {
    width: 100%;
  }
</style>
