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
  background: rgba(255, 255, 255, 1);
  min-height: 100vh;
  padding: 32px 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

h1 {
  font-family: 'Work Sans';
  font-size: 120px;
  font-weight: 700;
  color: #25be37;
  margin: 0;
}

h2 {
  font-family: 'Work Sans';
  font-size: 32px;
  font-weight: 600;
  color: #181a2a;
  margin: 0;
}

p {
  font-family: 'Work Sans';
  font-size: 16px;
  color: #3b3c4a;
  margin: 0 0 16px 0;
}

.home-button {
  padding: 12px 24px;
  background: #25be37;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: 'Work Sans';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.home-button:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1200px) {
  .main {
    padding: 32px 100px;
  }
}

@media screen and (max-width: 768px) {
  .main {
    padding: 32px 20px;
  }

  h1 {
    font-size: 80px;
  }

  h2 {
    font-size: 24px;
  }
}
</style>
