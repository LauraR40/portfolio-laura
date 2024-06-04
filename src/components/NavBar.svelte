<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    const nav = document.querySelector("nav");
    const observer = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle("sticky", !entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(nav);
  });
</script>

<nav>
  <div class="logo">
    <a href="/"><img src="/logo.png" alt="Logo" /></a>
  </div>
  <ul>
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
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    position: sticky;
    top: 0.5vh;
    z-index: 50;
  }

  .logo {
    margin-right: auto;
  }

  .logo img {
    height: 40px; /* Adjust this as needed */
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
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
</style>
