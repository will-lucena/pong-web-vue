<script setup>
import { quickLinks } from '@/config/navigation'
import WhatsAppButton from '@/components/buttons/WhatsAppButton.vue'
</script>

<template>
  <header class="header">
    <router-link to="/">
      <img src="/src/assets/logomarca.png" alt="" width="190" height="60" />
    </router-link>
    <nav>
      <ul class="nav_list">
        <li v-for="item in quickLinks" :key="item.link" class="nav_list__item">
          <router-link :to="item.link">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
    <WhatsAppButton />
  </header>
</template>

<style scoped lang="css">
.header {
  box-shadow: 0 10px 48px 0 var(--shadow-header);
  filter: drop-shadow(0 0 0 var(--color-black));
  background: var(--bg-primary);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-sm);

  padding: var(--space-3xl) var(--container-desktop);
}

.nav_list {
  display: flex;
  flex-direction: row;
  gap: var(--space-4xl);
  align-items: baseline;
  flex: 1;
  list-style: none;
}

.nav_list__item {
  font-family: var(--font-primary);
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  letter-spacing: 0%;
  color: var(--text-secondary);
}

.nav_list__item a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
}

.nav_list__item a:hover,
.nav_list__item a.router-link-active {
  color: var(--color-primary);
}

.header img {
  width: var(--logo-width);
  height: var(--logo-height);
}

@media screen and (max-width: 1440px) {
  .header {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-4xl);
  }

  .nav_list__item {
    font-size: var(--text-sm);
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding: var(--space-3xl) var(--container-mobile);
  }

  .nav_list {
    gap: var(--space-sm);
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .header {
    padding: var(--space-3xl) var(--container-mobile);
  }

  .nav_list {
    gap: var(--space-sm);
    display: none;
  }

  .nav_list__item {
    font-size: var(--text-xs);
  }
}
</style>
