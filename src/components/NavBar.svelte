<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const menuOpen = writable(false);

  function toggleMenu() {
    menuOpen.update((value) => !value);
  }

  $: $page.url, closeMenu();

  function closeMenu() {
    menuOpen.set(false);
  }

  onMount(() => {
    const nav = document.querySelector("nav");
    const observer = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle("sticky", !entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(nav);
    menuOpen.set(false);
  });
</script>

<nav>
  <div class="logo">
    <a href="/"><img src="/logo.png" alt="Logo" /></a>
  </div>
  <button class="hamburger" on:click={toggleMenu}>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
  <ul class:open={$menuOpen}>
    <li>
      <a href="/" class:active={$page.url.pathname === "/"}>
        <img src="/icons/home.svg" alt="Accueil" />
      </a>
    </li>
    <li>
      <a href="/propos" class:active={$page.url.pathname === "/propos"}
        >A propos</a
      >
    </li>
    <li>
      <a
        href="/competences"
        class:active={$page.url.pathname === "/competences"}>Compétences</a
      >
    </li>
    <li>
      <a href="/portfolio" class:active={$page.url.pathname === "/portfolio"}
        >Portfolio</a
      >
    </li>
    <li>
      <a href="/contact" class:active={$page.url.pathname === "/contact"}
        >Contact</a
      >
    </li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    padding: 1rem;
    background: rgba(25, 22, 40, 0.9);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: sticky;
    top: 0.4vh;
    z-index: 50;
  }

  .logo {
    margin-right: auto;
  }

  .logo img {
    height: 40px; /* Adjust this as needed */
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .hamburger .bar {
    width: 100%;
    height: 3px;
    background-color: var(--text-color);
    border-radius: 2px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
    transition: all 0.3s;
  }

  li a {
    text-decoration: none;
    font-family: var(--title-font);
    color: var(--text-color);
    font-size: 1.2rem;
    position: relative;
  }

  li a:hover {
    color: var(--primary-color);
  }

  li a.active {
    color: var(--primary-color);
  }

  li a.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    ul {
      display: flex;
      height: 0px;
      overflow: hidden;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 100%;
      left: -1px;
      width: 100vw;
      background: rgba(25, 22, 40, 0.9);
      transition: all 0.3s;
    }

    ul.open {
      display: flex;
      height: 100vh;
    }

    li {
      width: 100%;
      text-align: center;
      padding: 1rem 0;
    }

    li a {
      font-size: 1.5rem;
    }
  }
</style>
