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

  const CMQ = {
    imgs: [
      "/images/timeElements/1698763393219.jpg",
      "/images/timeElements/maxresdefault.jpg",
      "/images/timeElements/1716968294804.jpg",
    ],
    text: [
      "Ce deux ans d'alternance m'apportent une expérience concrète du monde du travail.",
      "Je rempli des missions diverses dans les domaines du dévellopement web, montage vidéo et de la communication en génaral.",
    ],
  };

  const comis = {
    imgs: [
      "/images/timeElements/l-agapa-hotel-spa-nuxe.jpg",
      "/images/timeElements/agapa-086_3_270579-165409310661090.jpeg",
      "/images/timeElements/16628.webp",
    ],
    text: [
      "J'ai travaillé au 'Belougat', le restaurant de l'hôtel 5 étoiles l'AGAPA a Perros Guirec en tant que comis de salle.",
      "Ce fut une expérience enrichissante qui m'a donner l'ooprtunitée de découvrir un métier qui m'étais jusqu'alors inconnu.",
    ],
  };

  const help = {
    imgs: [
      "/images/timeElements/20180601_131000.jpg",
      "/images/timeElements/20200829_204051(0).jpg",
      "/images/timeElements/149731.webp",
    ],
    text: [
      "J'ai fait ma première expérience de contact client en tant que serveuse en crêperie.",
      "J'étais essentiellement chargée de gérer la vente a emporter, le nettoyage /dressage et la plonge.",
    ],
  };

  const ankama = {
    imgs: [
      "/images/timeElements/images_list-r4x3w1000-578e5237a5303-l-editeur-de-jeux-video-roubaisien-ankama-a-sorti-son.jpg",
      "/images/timeElements/images.jpg",
      "/images/timeElements/B9733276191Z.1_20230125144212_000+G6IM3IDNE.1-0.jpg",
    ],
    text: [
      "Une stage passionnant aucours duquel j'ai pu avoir une vision globale des métiers de l'industrie du jeu vidéo.",
      "Ce stage m'a été d'une grande aide pour le choix de mon futur métier.",
    ],
  };

  const pontus = {
    imgs: [
      "/images/timeElements/capture-d-ecran-google-street-view-1473074145.jpg",
      "/images/timeElements/5edf1c0b28b0e_pontus_de_tyard.jpg",
      "/images/timeElements/1-1.jpg",
    ],
    text: [
      "Trois année de lycées fantistiques qui se sont conclues par l'obtention d'un diplome avec mention.",
    ],
  };

  let timelineElements = [
    {
      title: "Étudiante en alternance chez CMQe",
      date: "sept. 2022 - aujourd’hui",
      content: CMQ,
    },
    {
      title: "Commis de salle",
      date: "2022",
      content: comis,
    },
    {
      title: "BUT MMI",
      date: "2021-2024",
      content: MMI,
    },
    {
      title: "Aide en crèperie",
      date: "2021",
      content: help,
    },
    {
      title: "Stage d'observation chez Ankama",
      date: "2020",
      content: ankama,
    },
    {
      title: "Lycée Pontus de Tyard",
      date: "2018-2021",
      content: pontus,
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
        lastIndex={timelineElements.length - 1}
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
