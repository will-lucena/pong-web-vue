<script setup></script>

<template>
  <main class="main">
    <section class="contact">
      <h1>Contato</h1>
      <form class="contact_form">
        <div class="form_group">
          <label for="name">Nome</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="form_group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="form_group">
          <label for="message">Mensagem</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit" class="submit_button">Enviar</button>
      </form>
    </section>
  </main>
</template>

<style lang="css" scoped>
.main {
  background: rgba(255, 255, 255, 1);
  min-height: 100vh;
  padding: 32px 350px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact_form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
}

.form_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form_group input,
.form_group textarea {
  padding: 12px;
  border: 1px solid #e8e8ea;
  border-radius: 5px;
  font-family: 'Work Sans';
}

.submit_button {
  padding: 16px;
  background: #25be37;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: 'Work Sans';
  font-weight: 600;
  cursor: pointer;
}

@media screen and (max-width: 1440px) {
  .main {
    padding: 32px 80px;
  }
}

@media screen and (max-width: 768px) {
  .main {
    padding: 32px 16px;
  }
}

@media screen and (max-width: 425px) {
  .main {
    padding: 32px 16px;
  }
}
</style>
