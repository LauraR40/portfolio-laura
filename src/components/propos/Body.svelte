<script>
  export let imgs = [];
  export let text = [];

  if (text instanceof Array) {
    text = text
      .map((p) => {
        if (p === "") return "<br>";
        return `<p>${p}</p>`;
      })
      .join("<br>");
  }
</script>

<div class="row">
  <div class="texte">
    {@html text}
  </div>

  <div class="imgs">
    <img src={imgs[0]} alt="illustration de gauche" class="small" />
    <img src={imgs[1]} alt="illustration de droite" class="small" />
  </div>
</div>

<style>
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .texte {
    width: 55%;
    font-size: 0.9rem;
  }

  .imgs {
    width: 40%;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  .imgs img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 10px;
    border: 5px solid var(--text-color);
  }

  .small {
    display: grid;
  }

  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }

    .texte {
      width: 100%;
    }

    .imgs {
      width: 100%;
      margin-top: 1rem;
    }

    .imgs img {
      height: 70%;
    }
  }
</style>
