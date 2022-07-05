<script>
  import "../app.css";
  import Background from "$lib/Background.svelte";
  import Index from "./index.svelte";
</script>

<Background />
<div class="containerWrapper">
  <main class="container">
    <slot />
  </main>
</div>
