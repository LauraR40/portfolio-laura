<script>
  export let projects;
  export let currentCatego;
</script>

<div class="catego-projets">
  <h3>{currentCatego}</h3>
  {#each projects as projet}
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

<style>
  .proj {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    align-items: center;
    text-align: center;

    color: var(--bg-color);
    margin: 2em 0;

    padding: 0 2rem;
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

  .proj img {
    --size: clamp(10vh, 15vw, 15vh);
    width: var(--size);
    height: var(--size);
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .catego-projets {
      padding: 0;
    }

    .proj {
      padding: 0;
    }
  }
</style>
