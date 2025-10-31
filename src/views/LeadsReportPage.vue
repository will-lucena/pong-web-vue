<script setup>
import { ref } from 'vue'
import api from '@/services/api.js'

const token = ref('')
const isLoading = ref(false)
const leads = ref([])
const errorMessage = ref('')
const hasToken = ref(false)

async function handleTokenSubmit(e) {
  e.preventDefault()
  if (!token.value.trim()) {
    errorMessage.value = 'Por favor, insira um token válido.'
    return
  }

  isLoading.value = true
  errorMessage.value = ''
  try {
    const response = await api.getLeads(token.value.trim())
    leads.value = response.data || []
    hasToken.value = true
  } catch (err) {
    console.error('Failed to fetch leads', err)
    const errorDetail = err.response?.data?.[0]?.detail || err.response?.data?.message || err.message || 'Erro desconhecido'
    errorMessage.value = `Não foi possível carregar os leads. ${errorDetail}`
    hasToken.value = false
  } finally {
    isLoading.value = false
  }
}

function handleLogout() {
  token.value = ''
  leads.value = []
  hasToken.value = false
  errorMessage.value = ''
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR')
}
</script>

<template>
  <section class="container">
    <h1>Relatório de Leads</h1>
    <p>Lista de todos os leads coletados</p>

    <div v-if="!hasToken" class="token-form-container">
      <form class="token-form" @submit="handleTokenSubmit">
        <div class="field">
          <label for="token">Token de Autenticação</label>
          <input
            id="token"
            type="password"
            v-model="token"
            placeholder="Insira seu token de acesso"
            :disabled="isLoading"
          />
        </div>
        <button class="submit" type="submit" :disabled="isLoading || !token.trim()">
          {{ isLoading ? 'Carregando...' : 'Acessar Leads' }}
        </button>
      </form>
    </div>

    <div v-else class="logout-container">
      <button class="logout-btn" @click="handleLogout" type="button">
        Sair / Trocar Token
      </button>
    </div>

    <div v-if="errorMessage" class="alert alert-error">
      <span>{{ errorMessage }}</span>
      <button
        type="button"
        class="alert_close"
        @click="errorMessage = ''"
        aria-label="Fechar mensagem"
      >
        ×
      </button>
    </div>

    <div v-if="isLoading" class="loading-container">
      <div v-for="n in 6" :key="n" class="lead-item loading">
        <div class="skeleton skeleton-name"></div>
        <div class="skeleton skeleton-email"></div>
        <div class="skeleton skeleton-company"></div>
        <div class="skeleton skeleton-message"></div>
      </div>
    </div>

    <div v-else-if="hasToken && leads.length === 0" class="empty-state">
      <p>Nenhum lead encontrado.</p>
    </div>

    <ul v-else-if="hasToken && leads.length > 0" class="leads-list">
      <li v-for="{id, attributes} in leads" :key="id" class="lead-item">
        <div class="lead-header">
          <h3 class="lead-name">{{ attributes.name }}</h3>
          <span v-if="attributes.pong_member" class="badge badge-member">Membro PONG</span>
        </div>
        <div class="lead-details">
          <p class="lead-email">
            <strong>Email:</strong> {{ attributes.email }}
          </p>
          <p v-if="attributes.company" class="lead-company">
            <strong>Empresa:</strong> {{ attributes.company }}
          </p>
          <p v-if="attributes.message" class="lead-message">
            <strong>Mensagem:</strong> {{ attributes.message }}
          </p>
          <p v-if="attributes.created_at" class="lead-date">
            <strong>Data:</strong> {{ formatDate(attributes.created_at) }}
          </p>
        </div>
      </li>
    </ul>
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
}

.alert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
}

.alert-error {
  background: rgba(211, 51, 51, 0.1);
  color: var(--color-danger, #d33);
  border-color: var(--color-danger, #d33);
}

.alert_close {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: var(--text-lg);
}

.token-form-container {
  max-width: 600px;
  width: 100%;
}

.token-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-xl);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-xl);
  background: var(--bg-primary);
}

.token-form .field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.token-form label {
  font-weight: var(--font-semibold);
  color: var(--text-heading);
}

.token-form input {
  padding: var(--space-sm);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-primary);
}

.token-form input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.token-form .submit {
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: white;
  cursor: pointer;
  font-weight: var(--font-semibold);
}

.token-form .submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.logout-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.logout-btn {
  padding: var(--space-xs) var(--space-md);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: var(--text-sm);
}

.logout-btn:hover {
  background: var(--bg-secondary);
}

.loading-container,
.leads-list {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.lead-item {
  list-style: none;
  padding: var(--space-lg);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-xl);
  background: var(--bg-primary);
}

.lead-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.lead-name {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-xl);
  line-height: var(--leading-relaxed);
  color: var(--text-heading);
  margin: 0;
}

.badge {
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
}

.badge-member {
  background: var(--color-primary);
  color: white;
}

.lead-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.lead-details p {
  margin: 0;
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
}

.lead-details strong {
  color: var(--text-heading);
  font-weight: var(--font-semibold);
}

.lead-message {
  padding: var(--space-sm);
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  margin-top: var(--space-xs);
}

.lead-date {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
}

.empty-state {
  text-align: center;
  padding: var(--space-4xl);
  color: var(--text-secondary);
}

/* Loading skeletons */
.skeleton {
  display: block;
  background: linear-gradient(
    90deg,
    var(--bg-secondary) 25%,
    var(--border-secondary) 50%,
    var(--bg-secondary) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: var(--radius-sm);
}

.skeleton-name {
  height: var(--text-xl);
  width: 40%;
  margin-bottom: var(--space-md);
}

.skeleton-email {
  height: var(--text-base);
  width: 60%;
  margin-bottom: var(--space-xs);
}

.skeleton-company {
  height: var(--text-base);
  width: 50%;
  margin-bottom: var(--space-xs);
}

.skeleton-message {
  height: var(--text-base);
  width: 80%;
  margin-top: var(--space-xs);
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
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

  .lead-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: var(--space-3xl) var(--container-mobile);
  }
}
</style>

