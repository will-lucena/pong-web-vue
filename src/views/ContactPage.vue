<script setup></script>

<template>
  <section class="container">
    <h1>Entre em contato</h1>
    <form class="contact_form">
      <div class="form_group">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" placeholder="Insira seu Nome aqui" />
      </div>
      <div class="form_group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Insira seu Email aqui" />
      </div>
      <div class="form_group">
        <label for="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Insira aqui a mensagem que deseja enviar"
        ></textarea>
      </div>
      <button type="submit" class="submit_button">Enviar</button>
    </form>
  </section>
</template>

<style lang="css" scoped>
.container {
  background: var(--bg-primary);
  min-height: 100vh;
  width: 100%;
  padding: var(--space-3xl) var(--container-desktop);
  display: flex;
  flex-direction: row;
  gap: var(--space-4xl);
}

.container h1 {
  flex: 1;
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-4xl);
  line-height: var(--leading-relaxed);
  color: var(--text-heading);
}

.contact_form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  width: fit-content;
  height: fit-content;
  background: var(--form-bg);
  border-radius: var(--radius-xl);
  padding: var(--space-xl) var(--space-lg);
}

.form_group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.form_group label {
  font-family: var(--font-secondary);
  font-weight: var(--font-bold);
  font-size: var(--text-xl);
  line-height: var(--leading-loose);
  color: var(--form-label);
}

.form_group input,
.form_group textarea {
  padding: var(--space-md);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-sm);
  font-family: var(--font-primary);
  background: var(--form-input-bg);
}

.form_group input::placeholder,
.form_group textarea::placeholder {
  font-family: var(--font-secondary);
  font-weight: var(--font-bold);
  font-size: var(--text-xl);
  line-height: var(--leading-loose);
  color: var(--form-placeholder);
}

.submit_button {
  padding: var(--space-lg);
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

@media screen and (max-width: 1440px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: var(--space-3xl) var(--container-mobile);
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: var(--space-3xl) var(--container-mobile);
  }
}
</style>
