<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <header class="header">
    <img src="/src/assets/logomarca.png" alt="" width="190" height="60" />
    <nav>
      <ul class="nav_list">
        <li class="nav_list__item">Inicio</li>
        <li class="nav_list__item">Sobre</li>
        <li class="nav_list__item">Blog</li>
        <li class="nav_list__item">Organizadores</li>
        <li class="nav_list__item">Contato</li>
      </ul>
    </nav>
    <button class="community_button">
      <font-awesome-icon :icon="faWhatsapp" />
      Comunidade Whatsapp
    </button>
  </header>
</template>

<style scoped lang="css">
.header {
  box-shadow: 0 10px 48px 0 rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0 0 0 #000);
  background: rgba(255, 255, 255, 1);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  padding: 32px 350px;
}

.nav_list {
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: baseline;
  flex: 1;
  list-style: none;
}

.nav_list__item {
  font-family: Work Sans;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;

  color: #3b3c4a;
}

.community_button {
  padding: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  border: none;
  border-radius: 5px;

  background: #25be37;
  color: #fff;

  font-family: Work Sans;
  font-weight: 600;
  font-size: 17.3px;
  line-height: 17.3px;
}
</style>
