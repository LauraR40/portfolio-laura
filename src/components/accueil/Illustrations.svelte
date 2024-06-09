<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let illustrations = [
    { src: "/images/illustrations/Illustration0.png", alt: "Illustration 0" },
    { src: "/images/illustrations/Illustration1.png", alt: "Illustration 1" },
    { src: "/images/illustrations/Illustration2.png", alt: "Illustration 2" },
    { src: "/images/illustrations/Illustration3.png", alt: "Illustration 3" },
    { src: "/images/illustrations/Illustration4.png", alt: "Illustration 4" },
  ];

  let current = writable(0);
  let lastAction = writable(Date.now());

  function newAction() {
    lastAction.set(Date.now());
  }

  function next() {
    current.update((n) => (n + 1) % illustrations.length);
    newAction();
  }

  function prev() {
    current.update(
      (n) => (n - 1 + illustrations.length) % illustrations.length
    );
    newAction();
  }

  function goTo(index) {
    current.set(index);
    newAction();
  }

  onMount(() => {
    const interval = setInterval(() => {
      if (Date.now() - $lastAction < 5000) return; // auto slide every 5 seconds
      next();
    }, 500);
    return () => clearInterval(interval); // cleanup interval on destroy
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->

<section class="illustrations">
  <h2>Mes illustrations</h2>
  <p>
    Adepte de la programmation front-end et de l'UX de qualité, j'aime
    contribuer à créer et améliorer de nouvelles choses.
  </p>
  <div class="carousel-container">
    <a class="arrows prev" on:click={prev}>❮</a>
    <div class="carousel">
      <div class="carousel-inner">
        {#each illustrations as illustration, index}
          <div
            class="carousel-item"
            class:prev={$current === (index + 2) % illustrations.length}
            class:next={$current ===
              (index - 2 + illustrations.length) % illustrations.length}
            class:active={$current === index}
            class:prev2={$current === (index + 1) % illustrations.length}
            class:next2={$current ===
              (index - 1 + illustrations.length) % illustrations.length}
          >
            <img src={illustration.src} alt={illustration.alt} />
          </div>
        {/each}
      </div>
    </div>
    <a class="arrows next" on:click={next}>❯</a>
  </div>
  <div class="dots">
    {#each illustrations as _, index}
      <!-- svelte-ignore a11y-missing-content -->
      <a class:active={$current === index} on:click={() => goTo(index)}></a>
    {/each}
  </div>
  <button class="see-more-button">Voir plus</button>
</section>

<style>
  .illustrations {
    padding: 4rem 2rem;
    text-align: center;
    background: var(--bg-color);
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .illustrations h2 {
    font-family: var(--title-font);
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .illustrations p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    width: 60%;
  }

  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .carousel-inner {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-item {
    flex: 0 0 20%;
    position: relative;
    opacity: 0.5;
    transform: scale(0.7);
    transition:
      transform 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
  }

  .carousel-item img {
    width: 100%;
    border-radius: 8px;
  }

  .carousel-item.active {
    opacity: 1;
    transform: scale(1);
  }

  .carousel-item.prev,
  .carousel-item.next {
    opacity: 0.7;
  }

  .carousel-item.prev2,
  .carousel-item.next2 {
    opacity: 0.5;
  }

  .arrows {
    font-size: 2rem;
    cursor: pointer;
    color: var(--primary-color);
    z-index: 2;
    position: absolute;
  }

  .arrows.prev {
    left: -40px; /* Adjust position as needed */
  }

  .arrows.next {
    right: -40px; /* Adjust position as needed */
  }

  .dots {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .dots a {
    --size: 12px;
    width: var(--size);
    height: var(--size);
    background: var(--primary-color);
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    opacity: 0.5;
  }

  .dots .active {
    opacity: 1;
  }

  .see-more-button {
    background: #000; /* Black background */
    color: #fff; /* White text */
    padding: 1rem 2rem;
    border: none;
    border-radius: 30px; /* Rounded corners */
    font-size: 1rem;
    cursor: pointer;
    transition:
      background 0.3s,
      box-shadow 0.3s;
    margin-top: 2rem;
    box-shadow: 0 0 4px 2px #ff00888d;
    position: relative;
  }

  .see-more-button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    box-shadow: 0 0 8px 4px #ff00888d;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .see-more-button:hover::after {
    opacity: 1;
  }
</style>
