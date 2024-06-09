<script>
  import downloadFile from "$components/download.js";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<section class="row">
  <div class="texte">
    <p>
      Adepte de la programmation font-end et de l’UX de qualité, j’aime
      contribuer à créer et améliorer de nouvelles choses. Je suis également
      passionnée par les jeux de toutes sortes.
    </p>
    <p>Je suis également passionnée par les jeux de toutes sortes.</p>
    <h1>J’aime vivre de nouvelles expériences.</h1>

    <a
      on:click={() => {
        downloadFile("cv.pdf");
      }}>Jeter un coup d’œil à mon cv &rightarrow;</a
    >
  </div>
  <div class="img">
    <img src="/images/photo_laura.png" alt="PhotoLaura" />
  </div>
</section>

<style>
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    height: 90vh;
  }
  .row > div {
    flex: 1;
    margin: 0 2%;
  }

  .texte {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .texte p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .texte h1 {
    font-family: var(--title-font);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .texte a {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img img {
    width: 300px;
    border-radius: 8px;
  }
</style>
