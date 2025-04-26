<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import MenuOverlay from './components/menu/MenuOverlay.vue'

const isOpen = ref(false)
</script>

<template>
  <Header v-model:isOpen="isOpen" />
  <RouterView class="main-content" />
  <Footer />
  <MenuOverlay v-model:isOpen="isOpen" />
</template>

<style scoped>
.main-content {
  margin-top: var(--header-height-mobile);
}

@media (min-width: 768px) {
  .main-content {
    margin-top: var(--header-height-tablet);
  }
}

@media (min-width: 1024px) {
  .main-content {
    margin-top: var(--header-height-desktop);
  }
}
</style>
