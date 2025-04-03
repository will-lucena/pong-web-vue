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
  background: rgba(255, 255, 255, 1);
  min-height: 100vh;
  width: 100%;
  padding: 32px 350px;
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.container h1 {
  flex: 1;

  font-family: Work Sans;
  font-weight: 600;
  font-size: 36px;
  line-height: 28px;
  letter-spacing: 0%;

  color: #181a2a;
}

.contact_form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: fit-content;
  height: fit-content;

  background: #d9d9d94d;
  border-radius: 12px;
  padding: 24px 16px;
}

.form_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form_group label {
  font-family: 'Source Sans 3';
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #3b3c4aa6;
}

.form_group input,
.form_group textarea {
  padding: 12px;
  border: 1px solid #e8e8ea;
  border-radius: 5px;
  font-family: 'Work Sans';
  background: #d9d9d966;
}

.form_group input::placeholder,
.form_group textarea::placeholder {
  font-family: 'Source Sans 3';
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #3b3c4a66;
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
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

@media screen and (max-width: 1440px) {
  .container {
    padding: 32px 80px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 32px 16px;
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: 32px 16px;
  }
}
</style>
