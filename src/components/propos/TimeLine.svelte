<script>
  import TimeElement from "./TimeElement.svelte";
  import { writable } from "svelte/store";

  const blabla = {
    imgs: [
      "/images/illustrations/Illustration1.png",
      "/images/illustrations/Illustration0.png",
      "/images/illustrations/Illustration2.png",
    ],
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  };

  const MMI = {
    imgs: [
      "/images/timeElements/iut.png",
      "/images/timeElements/mmi.png",
      "/images/timeElements/classe.jpg",
    ],
    text: [
      "Actuellement en cours en alternance.",
      "J’étudie à l’IUT de Lannion, et mon alternance se déroule au campus des métiers et des qualifications d’excellence Numérique Photonique et cybersécurité à Lannion également.",
      "Ces 3 années d’IUT m’ont permis de développer mes compétences dans les domaines de la programmation, de l’audio-visuel et de la communication.",
    ],
  };

  let timelineElements = [
    {
      title: "BUT MMI",
      date: "2021-2024",
      content: MMI,
    },
    {
      title: "Lycée Pète plus haut !",
      date: "2020-2021",
      content: blabla,
    },
    {
      title: "Collège de Lauréat",
      date: "2016-2019",
      content: blabla,
    },
    {
      title: "Primaire très bof",
      date: "2016-2019",
      content: blabla,
    },
    {
      title: "Gaga ? ",
      date: "2016-2019",
      content: blabla,
    },
  ];

  let current = writable(0);

  function goTo(index) {
    current.set(index);
  }
</script>

<section class="timeline">
  <h2>Mon parcours</h2>
  <div class="elements">
    {#each timelineElements as element, index}
      <TimeElement
        title={element.title}
        date={element.date}
        active={$current === index}
        content={element.content}
        goto={goTo}
        {index}
      />
    {/each}
  </div>
</section>

<style>
  .timeline {
    padding: 2rem;
  }

  .timeline h2 {
    font-family: var(--title-font);
    font-size: 2.5rem;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 2rem;
  }

  .elements {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    width: 100%;
    height: 100%;
  }
</style>
