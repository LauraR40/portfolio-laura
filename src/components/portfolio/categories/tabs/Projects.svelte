<script>
  export let projectTypes;
  export let projects;
</script>

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
      {#each projs.projs as proj}
        <div>
          <img src={proj.imgUrl} alt={proj.id} />
          <span>{proj.id}</span>
        </div>
      {/each}
    {/each}
  </div>
</div>

<style>
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
    height: 10vh;
    background-color: #e3336e;
    border-radius: 8px;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    cursor: pointer;
  }

  .wrapper-catego div:hover {
    background-color: #ee598b;
  }

  .wrapper-proj {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
