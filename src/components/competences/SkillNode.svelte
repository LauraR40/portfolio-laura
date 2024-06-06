<script>
  export let skills;
</script>

<ul>
  {#each skills as skill}
    <li>
      <div class="skill-node">
        {skill.name}
      </div>
      {#if skill.children}
        <svelte:self skills={skill.children} />
      {/if}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  .skill-node {
    position: relative;
    padding-left: 20px;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .skill-node::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 10px;
    height: 2px;
    background-color: var(--primary-color);
  }

  .skill-node::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 0.5rem;
    height: calc(100% - 0.5rem);
    width: 2px;
    background-color: var(--primary-color);
  }

  .skill-node:last-child::after {
    height: 0;
  }
</style>
