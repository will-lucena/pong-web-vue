<script setup>
import { RouterView } from 'vue-router'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>
