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
    <div class="tabs-content">
      {#if $tabIndex === -1}
        <Categories {projects} {goToCat} />
      {:else if $tabIndex == 0}
        <Category
          projects={projects[$currentCatego].projs}
          currentCatego={$currentCatego}
        />
      {:else if $tabIndex == 1}
        <Projects {projects} />
      {:else if $tabIndex == 2}
        <Venir />
      {/if}
    </div>
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
    background-image: url("/images/timeElements/4da8ad22-e688-4d59-895f-dfce40fa4879.webp");
    color: var(--text-color);
    font-family: var(--title-font);
    border-radius: 7px 7px 0 0;
  }

  .title h1 {
    font-family: var(--title-font);
    font-size: 2.5rem;
    color: var(--text-color);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  }

  .title h2 {
    font-family: var(--default-font);
    font-size: 1.2rem;
    color: var(--primary-color);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  }

  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2rem;
    padding: 1em 0;
    background-color: whitesmoke;
    height: min-content;
  }

  .tabs-wrapper {
    background-color: whitesmoke;
    border-radius: 0 0 7px 7px;
    height: 70vh;
    overflow: hidden;
  }

  .tabs-content {
    padding: 1rem;
    height: 85%;
    overflow-y: scroll;
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

  @media (max-width: 768px) {
    .tabs {
      gap: 1rem;
    }

    .tabs span {
      width: 100%;
      text-align: center;
    }
  }
</style>
