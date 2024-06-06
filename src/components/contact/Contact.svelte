<script>
  // You can replace these with actual dynamic data if needed
  let contactInfo = {
    address: "1234 Street Name, City, Country",
    email: "youremail@example.com",
    phone: "+1234567890",
    // Adresse du Dorcel Store de Rennes x) (c'est un exemple)
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.6668086479117!2d-1.6911777235452206!3d48.135948571243276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ede1ac2ac42d7%3A0x1b32de1df96dbbd3!2sDorcelstore%20Rennes!5e0!3m2!1sen!2sus!4v1717693552800!5m2!1sen!2sus",
  };
  function submitForm() {
    // Handle form submission
    alert("Form submitted!");
  }
</script>

<div class="contact-page">
  <div class="contact-header">
    <h1>Contactez-moi</h1>
    <p>
      Vous avez des questions ou souhaitez me parler ?
      <br />
      Envoyez-moi un message via le formulaire ci-dessous ou utilisez mes coordonnées.
    </p>
  </div>

  <div class="contact-container">
    <div class="contact-form">
      <h2>Envoyer un message</h2>
      <form on:submit|preventDefault={submitForm}>
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>

    <div class="contact-info">
      <h2>Mes coordonnées</h2>
      <p><strong>Adresse :</strong> {contactInfo.address}</p>
      <p>
        <strong>Email :</strong>
        <a href="mailto:{contactInfo.email}">{contactInfo.email}</a>
      </p>
      <p>
        <strong>Téléphone :</strong>
        <a href="tel:{contactInfo.phone}">{contactInfo.phone}</a>
      </p>
      <iframe
        src={contactInfo.mapSrc}
        width="100%"
        height="250"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>

<style>
  .contact-page {
    padding: 2rem;
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .contact-header h1 {
    font-family: var(--title-font);
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .contact-header p {
    font-size: 1.2rem;
  }

  .contact-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
  }

  .contact-form,
  .contact-info {
    flex: 1;
    margin: 0 1rem;
  }

  .contact-form h2,
  .contact-info h2 {
    font-family: var(--title-font);
    color: var(--primary-color);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .contact-form form {
    display: flex;
    flex-direction: column;
  }

  .contact-form label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #333;
    color: #fff;
  }

  .contact-form button {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    padding: 0.7rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .contact-form button:hover {
    background-color: #e5006a;
  }

  .contact-info p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .contact-info a {
    color: var(--primary-color);
    text-decoration: none;
  }
</style>
