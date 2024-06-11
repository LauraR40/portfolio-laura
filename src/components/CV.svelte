<script>
  import downloadFile from "./download.js";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->

<div class="cv-section">
  <div class="text-content">
    <h1>CV développeuse mobile flutter</h1>
    <p>Besoin d’en savoir plus sur mon parcours, télécharge mon CV en ligne.</p>
  </div>

  <a
    on:click={() => {
      downloadFile("cv.pdf");
    }}
    class="download-button"
    target="_blank"
  >
    <span class="icon">
      <img src="/icons/file_save.svg" alt="download" />
    </span>
    Télécharger
  </a>
</div>

<style>
  .cv-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-image: url("/images/fond-cv.png");
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin: 2rem;
    position: relative;
  }

  .text-content {
    color: white;
    max-width: 60%;
  }

  .text-content h1 {
    font-size: 2rem;
    font-family: var(--title-font);
    margin: 0 0 1rem;
  }

  .text-content p {
    font-size: 1.2rem;
  }

  .download-button {
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: 1rem 2rem;
    border: 1px solid var(--text-color);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    font-size: 1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: background 0.3s;
  }

  .download-button .icon {
    margin-right: 0.5rem;
  }

  .download-button:hover {
    background-color: #e5006a;
  }

  @media (max-width: 768px) {
    .cv-section {
      flex-direction: column;
      text-align: center;
      padding: 1rem;
    }

    .text-content {
      max-width: 100%;
    }

    .text-content h1 {
      font-size: 1.5rem;
    }

    .text-content p {
      font-size: 1rem;
    }

    .download-button {
      margin-top: 1rem;
      width: 100%;
      justify-content: center;
    }

    .download-button .icon {
      margin-right: 0.5rem;
    }
  }
</style>
