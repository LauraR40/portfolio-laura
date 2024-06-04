<script>
  import ProjectCard from "$components/accueil/CadreProjet.svelte";

  const projects = [
    {
      title: "Project 1",
      description: "Un petit texte de qualité avec du détail et un lien.",
      link: "/project1",
    },
    {
      title: "Project 2",
      description: "Un petit texte de qualité avec du détail et un lien.",
      link: "/project2",
    },
    {
      title: "Project 3",
      description: "Un petit texte de qualité avec du détail et un lien.",
      link: "/project3",
    },
    {
      title: "Project 4",
      description: "Un petit texte de qualité avec du détail et un lien.",
      link: "/project4",
    },
  ];
</script>

<section class="projects-section">
  <div class="blobs">
    <svg
      class="blob blob1"
      viewBox="0 0 900 600"
      width="400"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      ><g transform="translate(441.8856831567153 298.99387857023197)"
        ><path
          d="M109.2 -107.8C144.3 -74 177.7 -37 189.7 12C201.7 61 192.4 122.1 157.3 151.3C122.1 180.4 61 177.7 -4.8 182.5C-70.7 187.4 -141.4 199.8 -166.4 170.6C-191.4 141.4 -170.7 70.7 -164.6 6.1C-158.5 -58.5 -166.9 -116.9 -141.9 -150.7C-116.9 -184.6 -58.5 -193.8 -10.7 -183.1C37 -172.3 74 -141.7 109.2 -107.8"
          fill="#BB004B"
        ></path></g
      >
    </svg>
    <svg
      class="blob blob2"
      viewBox="0 0 900 600"
      width="400"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      ><g transform="translate(486.8050769597262 343.30950888889816)"
        ><path
          d="M114.3 -132.5C146.2 -82.5 168.6 -41.2 177.9 9.3C187.2 59.9 183.4 119.7 151.6 144.7C119.7 169.7 59.9 159.9 -3.4 163.3C-66.7 166.7 -133.4 183.4 -180.4 158.4C-227.4 133.4 -254.7 66.7 -255.9 -1.2C-257.1 -69.1 -232.1 -138.1 -185.1 -188.1C-138.1 -238.1 -69.1 -269.1 -13.9 -255.2C41.2 -241.2 82.5 -182.5 114.3 -132.5"
          fill="#BB004B"
        ></path></g
      >
    </svg>
  </div>
  <div class="row">
    <div class="mockup">
      <img src="/images/mockup.png" alt="mockup" />
    </div>
    <div class="projets">
      <h2>Mes projets phare</h2>
      <div class="projects-grid">
        {#each projects as project}
          <ProjectCard
            title={project.title}
            description={project.description}
            link={"/portfolio/" + project.link}
          />
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
  }

  .row > div {
    width: 45%;
  }

  .projects-section {
    padding: 4rem 2rem;
    text-align: center;
    background: var(--bg-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 90vh;
    position: relative;
  }

  .projects-section h2 {
    font-family: var(--title-font);
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    justify-items: center;
    z-index: 5;
  }

  .blobs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .blob {
    position: absolute;
    opacity: 0.6;
    filter: blur(25px);
    z-index: 0;
  }

  .blob1 {
    bottom: 29.4%;
    left: -10.5%;
    width: 35%;
    height: auto;
  }

  .blob2 {
    top: 29.4%;
    right: -10.5%;
    width: 35%;
    height: auto;
  }
</style>
