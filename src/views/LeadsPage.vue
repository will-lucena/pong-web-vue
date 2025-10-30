<script setup>
import { ref } from 'vue'
import api from '@/services/api.js'

const name = ref('')
const email = ref('')
const company = ref('')
const message = ref('')
const knowsPong = ref(false)

const isSubmitting = ref(false)
const submitted = ref(false)
const errors = ref({ name: '', email: '' })

function validate() {
  errors.value = { name: '', email: '' }
  let valid = true
  if (!name.value.trim()) {
    errors.value.name = 'Nome é obrigatório'
    valid = false
  }
  if (!email.value.trim()) {
    errors.value.email = 'Email é obrigatório'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Email inválido'
    valid = false
  }
  return valid
}

async function handleSubmit(e) {
  e.preventDefault()
  if (!validate()) return
  isSubmitting.value = true
  try {
    const payload = {
      name: name.value,
      email: email.value,
      company: company.value,
      message: message.value,
      pong_member: knowsPong.value,
    }
    await api.createLead(payload)
    submitted.value = true
    name.value = ''
    email.value = ''
    company.value = ''
    message.value = ''
    knowsPong.value = false
  } catch (err) {
    console.error('Failed to submit lead', err)
    // Surface a simple error state
    submitted.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="container">
    <h1>Leads</h1>
    <p>Preencha o formulário para entrar em contato.</p>

    <form class="form" @submit="handleSubmit">
      <div class="field">
        <label for="name">Nome</label>
        <input id="name" type="text" v-model="name" :disabled="isSubmitting" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" :disabled="isSubmitting" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="field">
        <label for="company">Empresa</label>
        <input id="company" type="text" v-model="company" :disabled="isSubmitting" />
      </div>

      <div class="field">
        <label for="message">Mensagem</label>
        <textarea id="message" rows="5" v-model="message" :disabled="isSubmitting"></textarea>
      </div>

      <div class="checkbox">
        <input id="knowsPong" type="checkbox" v-model="knowsPong" :disabled="isSubmitting" />
        <label for="knowsPong">Já conhece o PONG?</label>
      </div>

      <button class="submit" type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
      </button>

      <p v-if="submitted" class="success">Obrigado! Recebemos seu contato.</p>
    </form>
  </section>
</template>

<style lang="css" scoped>
.container {
  background: var(--bg-primary);
  min-height: 100vh;
  padding: var(--space-3xl) var(--container-desktop);
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  max-width: 720px;
  width: 100%;
}

.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

label {
  font-weight: var(--font-semibold);
  color: var(--text-heading);
}

input,
textarea {
  padding: var(--space-sm);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
}

.checkbox {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.submit {
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: white;
  cursor: pointer;
}

.submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error {
  color: var(--color-danger, #d33);
  font-size: var(--text-sm);
}

.success {
  color: var(--color-success, #2a7f2a);
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
