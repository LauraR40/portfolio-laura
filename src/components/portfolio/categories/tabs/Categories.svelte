<script>
  export let projects;
  export let goToCat;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="categories">
  {#each Object.keys(projects) as name}
    <div
      class="category-wrapper"
      on:click={() => {
        goToCat(name);
      }}
    >
      <div class="category">
        <img src={projects[name].imgUrl} alt={name} />
      </div>
      <span>{name}</span>
    </div>
  {/each}
</div>

<style>
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

  .category img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .category-wrapper span {
    font-size: 1rem;
    font-family: var(--default-font);
  }
</style>
