<script>
  import Header from "./Header.svelte";
  import "./styles.css";
</script>

<svelte:head>
  <script
    defer
    data-domain="whatisoffered.lt"
    src="https://plausible.io/js/script.js"
  ></script>
</svelte:head>
<div class="app">
  <Header />
  <main>
    <slot />
  </main>
  <footer>
    <p>
      By
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/vytenis-sidabras/"
      >
        Vytenis
      </a>
    </p>
  </footer>
</div>

<style>
  .app {
    min-height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
  }

  main {
    flex: 1;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
</style>
