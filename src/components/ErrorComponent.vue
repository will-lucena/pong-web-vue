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
  padding: 20px;
}

.error-content {
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.error-title {
  font-family: 'Work Sans';
  font-weight: 600;
  font-size: 24px;
  color: #181a2a;
}

.error-message {
  font-family: 'Work Sans';
  font-size: 16px;
  color: #3b3c4a;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.retry-button,
.home-button {
  padding: 12px 24px;
  border-radius: 5px;
  font-family: 'Work Sans';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.retry-button {
  background: #25be37;
  color: white;
  border: none;
}

.home-button {
  background: transparent;
  color: #3b3c4a;
  border: 1px solid #e8e8ea;
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
