<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <main class="main">
    <div class="not-found">
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <button class="home-button" @click="goHome">Voltar para Início</button>
    </div>
  </main>
</template>

<style scoped>
.main {
  background: var(--bg-primary);
  min-height: 100vh;
  padding: var(--space-3xl) var(--container-desktop);
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

h1 {
  font-family: var(--font-primary);
  font-size: var(--error-title-size);
  font-weight: var(--font-bold);
  color: var(--color-primary);
  margin: 0;
}

h2 {
  font-family: var(--font-primary);
  font-size: var(--text-4xl);
  font-weight: var(--font-semibold);
  color: var(--text-heading);
  margin: 0;
}

p {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin: 0 0 var(--space-lg) 0;
}

.home-button {
  padding: var(--space-md) var(--space-xl);
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  cursor: pointer;
  transition: opacity 0.2s;
}

.home-button:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1200px) {
  .main {
    padding: var(--space-3xl) var(--container-laptop);
  }
}

@media screen and (max-width: 768px) {
  .main {
    padding: var(--space-3xl) var(--container-mobile);
  }

  h1 {
    font-size: var(--text-6xl);
  }

  h2 {
    font-size: var(--text-2xl);
  }
}
</style>
