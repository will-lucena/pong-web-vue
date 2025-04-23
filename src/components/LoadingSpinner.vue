<script setup></script>

<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <p class="loading-text">Carregando...</p>
  </div>
</template>

<style scoped>
.loading-container {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid var(--bg-secondary);
  border-top: 5px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-secondary);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
