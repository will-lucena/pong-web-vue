<script setup>
import { ref } from 'vue'

const isLoading = ref(false)

const handleSubmit = (event) => {
  event.preventDefault()
  isLoading.value = true

  const formData = new FormData(event.target)
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  const subject = `Contato de ${name}`
  const body = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`

  const mailtoLink = `mailto:pongrnbr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink

  // Wait for 1 second before refreshing to ensure mailto link opens
  setTimeout(() => {
    window.location.reload()
  }, 1000)
}
</script>

<template>
  <section class="container">
    <h1>Entre em contato</h1>
    <form class="contact_form" @submit="handleSubmit">
      <div class="form_group">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" placeholder="Insira seu Nome aqui" required />
      </div>
      <div class="form_group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Insira seu Email aqui" required />
      </div>
      <div class="form_group">
        <label for="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Insira aqui a mensagem que deseja enviar"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit_button" :disabled="isLoading">
        <span v-if="isLoading" class="loading_spinner"></span>
        {{ isLoading ? 'Enviando...' : 'Enviar' }}
      </button>
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  transition: all 0.3s ease;
}

.submit_button:disabled {
  background: var(--color-primary-light);
  cursor: not-allowed;
  opacity: 0.8;
}

.loading_spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-white);
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.mailto_section {
  margin-top: var(--space-xl);
  text-align: center;
}

.mailto_section p {
  font-family: var(--font-secondary);
  font-size: var(--text-lg);
  color: var(--text-body);
  margin-bottom: var(--space-sm);
}

.mailto_link {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.mailto_link:hover {
  color: var(--color-primary-dark);
}

@media screen and (max-width: 1400px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
  }
}

@media screen and (max-width: 1200px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-3xl);
  }
}

@media screen and (max-width: 992px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-2xl);
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: var(--space-mobile-3xl) var(--container-mobile);
    flex-direction: column;
    gap: var(--space-mobile-2xl);
    min-height: auto;
  }

  .container h1 {
    flex: none;
  }

  .contact_form {
    width: 100%;
    height: auto;
    padding: var(--space-mobile-xl) var(--space-mobile-lg);
    gap: var(--space-mobile-xl);
  }

  .form_group {
    gap: var(--space-mobile-xs);
  }

  .form_group label {
    font-size: var(--text-lg);
  }

  .form_group input::placeholder,
  .form_group textarea::placeholder {
    font-size: var(--text-lg);
  }

  .submit_button {
    padding: var(--space-mobile-lg);
  }

  .mailto_section {
    margin-top: var(--space-mobile-xl);
  }

  .mailto_section p {
    font-size: var(--text-base);
  }

  .mailto_link {
    font-size: var(--text-lg);
  }
}

@media screen and (max-width: 576px) {
  .container {
    padding: var(--space-mobile-2xl) var(--container-mobile);
    gap: var(--space-mobile-xl);
  }

  .contact_form {
    padding: var(--space-mobile-lg) var(--space-mobile-md);
    gap: var(--space-mobile-lg);
  }

  .form_group {
    gap: var(--space-mobile-2xs);
  }

  .form_group label {
    font-size: var(--text-base);
  }

  .form_group input,
  .form_group textarea {
    padding: var(--space-mobile-md);
  }

  .form_group input::placeholder,
  .form_group textarea::placeholder {
    font-size: var(--text-base);
  }

  .submit_button {
    padding: var(--space-mobile-md);
    font-size: var(--text-sm);
  }
}
</style>
