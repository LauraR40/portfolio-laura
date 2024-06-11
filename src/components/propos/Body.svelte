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
    <img src={imgs[0]} alt="" class="big" />
    <img src={imgs[1]} alt="" class="small" />
    <img src={imgs[2]} alt="" class="small" />
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
    grid-template-rows: 1fr 1fr;
    height: 100%;
  }

  .imgs img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 10px;
    border: 5px solid var(--text-color);
  }

  .big {
    height: 40% !important;
    display: grid;
    grid-column: 1 / span 2;
  }

  .small {
    display: grid;
    /* grid: 1 / span 1; */
    grid-row: 1;
  }
</style>
