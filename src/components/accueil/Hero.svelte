<section class="titles">
  <img src="/logo.png" alt="Logo" />
  <h1>LAURA ROCHETEAU</h1>
  <h2>Développeuse mobile, auto-entrepreneuse</h2>
  <svg class="triangle" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon points="0,100 100,100 100,0" />
  </svg>
</section>

<style>
  .titles {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    text-align: center;
    background-image: url("/images/fond.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .titles::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 20%;
  }

  h1,
  h2 {
    font-family: var(--default-font);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  }

  h1 {
    margin-top: 1rem;
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: var(--primary-color);
  }

  .triangle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    fill: var(--bg-color);
  }
</style>
