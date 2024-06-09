<script>
  import { writable } from "svelte/store";
  import portfolio from "../data.js";

  import Category from "./Category.svelte";
  import Categories from "./Categories.svelte";
  import Projects from "./Projects.svelte";
  import Venir from "./Venir.svelte";

  const { projects, projectTypes } = portfolio;

  let tabIndex = writable(-1);
  let currentCatego = writable(null);

  function goToTab(index) {
    tabIndex.set(index);
  }

  function goToCat(catego) {
    tabIndex.set(0);
    currentCatego.set(catego);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section>
  <div class="title">
    <h1>Mes Projets</h1>
    <h2>
      {#if $tabIndex == -1}
        par catégories
      {:else if $tabIndex == 0}
        de {$currentCatego}
      {:else if $tabIndex == 1}
        partie exploration
      {/if}
    </h2>
  </div>

  <div class="tabs-wrapper">
    <div class="tabs">
      <span
        class:active={$tabIndex === -1 || $tabIndex == 0}
        on:click={() => {
          goToTab(-1);
        }}>Catégories</span
      >
      <span
        class:active={$tabIndex === 1}
        on:click={() => {
          goToTab(1);
        }}>Projets</span
      >
      <span
        class:active={$tabIndex === 2}
        on:click={() => {
          goToTab(2);
        }}>À venir</span
      >
    </div>
    <hr />
    {#if $tabIndex === -1}
      <Categories {projects} {goToCat} />
    {:else if $tabIndex == 0}
      <Category
        projects={projects[$currentCatego]}
        currentCatego={$currentCatego}
      />
    {:else if $tabIndex == 1}
      <Projects {projectTypes} {projects} />
    {:else if $tabIndex == 2}
      <Venir />
    {/if}
  </div>
</section>

<style>
  section {
    position: relative;
    padding: 2rem;
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    width: 100%;
    padding: 4rem 0;
    background-color: #7f7f7f;
    color: var(--text-color);
    font-family: var(--title-font);
  }

  .title h1 {
    font-family: var(--title-font);
    font-size: 2.5rem;
    color: var(--text-color);
  }

  .title h2 {
    font-family: var(--default-font);
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  .tabs {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1em 0;
    background-color: whitesmoke;
  }

  .tabs-wrapper {
    background-color: whitesmoke;
  }

  .tabs span {
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: var(--bg-color);
    position: relative;
  }

  .tabs span.active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }
</style>
