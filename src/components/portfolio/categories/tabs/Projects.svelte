<script>
  export let projects;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="wrapper-explo">
  <div class="wrapper-proj">
    {#each Object.values(projects) as projs}
      {#each projs.projs as proj}
        <div
          class="project"
          on:click={() => {
            location.href = "/portfolio/" + proj.id;
          }}
        >
          <img src={proj.imgUrl} alt={proj.id} />
          <span>{proj.id}</span>
        </div>
      {/each}
    {/each}
  </div>
</div>

<style>
  .wrapper-explo {
    padding: 2rem;
  }

  .wrapper-proj {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .wrapper-proj .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    cursor: pointer;
  }

  .wrapper-proj .project img {
    width: 100%;
    height: 90%;
    border-radius: 8px;
    object-fit: cover;
  }

  .wrapper-proj .project span {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: var(--bg-color);
  }

  .wrapper-proj .project:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    .wrapper-proj {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .wrapper-proj {
      grid-template-columns: 1fr;
    }

    .wrapper-proj .project {
      padding: 0.5rem;
    }

    .wrapper-proj .project span {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    .wrapper-explo {
      padding: 1rem;
    }

    .wrapper-proj .project {
      padding: 0.5rem;
    }

    .wrapper-proj .project span {
      font-size: 0.75rem;
    }
  }
</style>
