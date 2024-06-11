<footer>
  <hr />
  <div class="footer-section">
    <img src="/logo.png" alt="Company Logo" />
    <p>
      LAURA ROCHETEAU<br />
      DEVELOPPEUSE D'APPLICATIONS FREELANCE<br />
      &#9990; : +33 01 23 45 67 89<br />
    </p>
  </div>
  <div class="footer-section">
    <h3>Société</h3>
    <p><a href="/tarifs">Tarifs</a></p>
    <p><a href="/faq">FAQ</a></p>
    <p><a href="/contact">Contact</a></p>
  </div>
  <div class="footer-section">
    <h3>Navigation</h3>
    <p><a href="/">Accueil</a></p>
    <p><a href="/propos">À propos</a></p>
    <p><a href="/competences">Compétences</a></p>
    <p><a href="/portfolio">Portfolio</a></p>
    <p><a href="/contact">Contact</a></p>
  </div>
  <div class="footer-section">
    <h3>Réseaux</h3>
    <p>
      <a href="https://www.linkedin.com/in/lroc/" target="_blank">
        <img src="/icons/linkedin.svg" alt="logo linkedin" />
        Linkedin</a
      >
    </p>
    <p>
      <a href="https://github.com/LauraR40" target="_blank"
        ><img src="/icons/github.svg" alt="logo github" />GitHub</a
      >
    </p>
    <p>
      <a href="https://www.instagram.com/mon_dys_et_moi/" target="_blank">
        <img src="/icons/instagram.svg" alt="logo insta" />
        Instagram</a
      >
    </p>
    <p>
      <a href="https://www.behance.net/laulierock" target="_blank"
        ><img src="/icons/behance.svg" alt="logo behance" />Behance</a
      >
    </p>
  </div>
  <hr />
  <div class="footer-bottom">
    <p>&copy; 2024 développé avec ❤️ by LauraR40</p>
    <p>Stack utilisé : SvelteKit et Vite</p>
  </div>
</footer>

<style>
  footer {
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: var(--default-font);
    align-items: center;
  }
  .footer-bottom,
  .footer-section {
    padding: 1rem;
  }

  .footer-section {
    flex: 1;
    min-width: 200px;
    margin: 1rem;
  }

  .footer-section h3 {
    font-family: var(--title-font);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .footer-section p,
  .footer-section a {
    font-size: 1rem;
    color: var(--text-color);
    text-decoration: none;
    line-height: 1.5;
  }

  .footer-section p a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .footer-section a:hover {
    color: var(--primary-color);
  }

  hr {
    border: 0;
    border-top: 1px solid var(--text-color);
    margin: 1rem 0;
    width: 100%;
    height: 1px;
  }

  .footer-bottom {
    text-align: center;
    font-size: 0.875rem;
    padding-top: 1rem;
    width: 100%;
  }

  .footer-bottom p {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    footer {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
