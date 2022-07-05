<script>
  import { onMount } from "svelte";
  let data;

  const getNewJoke = async () => {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    data = response.ok ? await response.json() : {};
  };
  onMount(() => {
    getNewJoke();
  });
</script>

{#await data}
  loading
{:then value}
  {#if value}
    <h1>{value.joke}</h1>
  {/if}
{/await}

<button on:click="{getNewJoke}">New Joke</button>
<p>
  All jokes are from <a href="https://icanhazdadjoke.com/">icanhazdadjoke.com</a
  >.
</p>
<p>
  Background by <a href="https://codepen.io/chriscoyier/pen/nZWbMN"
    >Chris Coyier</a
  >.
</p>
