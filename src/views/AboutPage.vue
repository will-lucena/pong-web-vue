<script setup></script>

<template>
  <main class="main">
    <section class="about">
      <h1>Sobre Nós</h1>
      <!-- Add your about content here -->
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
