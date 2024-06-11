<script>
  import downloadFile from "../../components/download.js";
</script>

<div style="width: 100%; height: 12vh; text-align: center; margin-top: 10vh;">
  <h1 style="color: var(--primary-color); font-size:medium;">
    COMÉTENCES TECHNIQUES
  </h1>
  <h2 class="mx-auto">De la veille aux acquis</h2>
  <h5 class="mx-auto" style="font-weight: 200;">
    Actuellement en cours en alternance.
  </h5>
</div>
<div style="display: flex; justify-content: center;">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    on:click={() => {
      downloadFile("CV_Laura_Rocheteau_web.pdf");
    }}
    class="tele-cv"
    target="_blank"
    >Télécharger un CV
  </a>
</div>
<div style="display: flex; justify-content: center;">
  <img
    src="images/timeElements/idee-competance.png"
    alt="illustration compétences"
    style="width: 440px; height: 400px;"
  />
</div>

<style>
  .tele-cv {
    background-color: #191628;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 2rem;
    box-shadow: 0 0 1px 2px #ff00888d;
    position: relative;
    margin-bottom: 2rem;
  }
</style>
