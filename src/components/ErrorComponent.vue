<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleRetry = () => {
  router.go(0) // Refreshes the current route
}

const handleGoHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="error-container">
    <div class="error-content">
      <h2 class="error-title">Ops! Algo deu errado.</h2>
      <p class="error-message">
        Não foi possível carregar esta página. Por favor, tente novamente.
      </p>
      <div class="button-group">
        <button class="retry-button" @click="handleRetry">Tentar Novamente</button>
        <button class="home-button" @click="handleGoHome">Voltar para Início</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
}

.error-content {
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.error-title {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-2xl);
  color: var(--text-heading);
}

.error-message {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
}

.button-group {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
}

.retry-button,
.home-button {
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-sm);
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  cursor: pointer;
  transition: opacity 0.2s;
}

.retry-button {
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
}

.home-button {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
}

.retry-button:hover,
.home-button:hover {
  opacity: 0.8;
}

@media screen and (max-width: 768px) {
  .button-group {
    flex-direction: column;
  }

  .retry-button,
  .home-button {
    width: 100%;
  }
}
</style>
