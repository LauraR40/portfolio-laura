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
    overflow: hidden;
    border-radius: 8px;
  }

  .category img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  .category:hover img {
    transform: scale(1.1);
  }

  .category-wrapper span {
    font-size: 1rem;
    font-family: var(--default-font);
  }

  @media (max-width: 768px) {
    .category-wrapper {
      width: 120px;
    }

    .category {
      width: 120px;
      height: 120px;
    }

    .category-wrapper span {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    .categories {
      gap: 1em;
    }

    .category-wrapper {
      width: 100px;
    }

    .category {
      width: 100px;
      height: 100px;
    }

    .category-wrapper span {
      font-size: 0.75rem;
    }
  }
</style>
