<script>
  export let title;
  export let description;
  export let link;
</script>

<a class="project-card" href={link} role="button" tabindex="0">
  <h3>{title}</h3>
  <p>{description}</p>
  <hr />
</a>

<style>
  hr {
    width: 66%;
    height: 2px;
    color: var(--primary-color);
    margin: 1em 0;
  }

  .project-card {
    background: #25233a;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    color: var(--text-color);
    cursor: pointer;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    box-shadow: 0 4px 6px #9011552a;

    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px #90115543;
  }

  .project-card h3 {
    font-family: var(--title-font);
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  .project-card p {
    font-size: 1rem;
  }
</style>
