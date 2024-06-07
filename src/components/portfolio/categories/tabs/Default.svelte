<script>
  import { writable } from "svelte/store";
  import portfolio from "../data.js";

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
      <div class="categories">
        {#each Object.keys(projects) as name}
          <div
            class="category-wrapper"
            on:click={() => {
              goToCat(name);
            }}
          >
            <div class="category"></div>
            <span>{name}</span>
          </div>
        {/each}
      </div>
    {:else if $tabIndex == 0}
      <div class="catego-projets">
        <h3>{$currentCatego}</h3>
        {#each projects[$currentCatego] as projet}
          <hr />
          <div class="proj">
            <img src={projet.imgUrl} alt={projet.id} />
            <span>{projet.date}</span>
            <span>{projet.desc}</span>
            <a href={"/portfolio/" + projet.id}>Plus</a>
          </div>
          <hr />
        {/each}
      </div>
    {:else if $tabIndex == 1}
      <div class="wrapper-explo">
        <div class="wrapper-catego">
          {#each projectTypes as proj}
            <div>
              {proj}
            </div>
          {/each}
        </div>
        <div class="wrapper-proj">
          {#each Object.values(projects) as projs}
            {#each projs as proj}
              <div>
                <img src={proj.imgUrl} alt={proj.id} />
                <span>{proj.id}</span>
              </div>
            {/each}
          {/each}
        </div>
      </div>
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

  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
    padding: 2rem 0;
  }

  .category-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1em;
    color: var(--bg-color);
  }

  .category {
    width: 150px;
    height: 150px;
    background-color: #e0e0e0;
    border: 4px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .category-wrapper span {
    font-size: 1rem;
    font-family: var(--default-font);
  }

  .proj {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    text-align: center;

    color: var(--bg-color);
    margin: 2em 0;
  }

  .catego-projets {
    padding: 2em;
  }

  .catego-projets h3 {
    color: var(--primary-color);
    font-family: var(--title-font);
    margin: 1em 0;
    text-transform: uppercase;
  }
  .catego-projets hr {
    margin: 1em 0;
  }

  .wrapper-catego {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 0 2rem;
  }

  .wrapper-catego div {
    height: 15vh;
    background-color: #7f7f7f;
    border-radius: 8px;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .wrapper-proj {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
