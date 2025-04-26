<script setup>
import { quickLinks } from '@/config/navigation'
import WhatsAppButton from '@/components/buttons/WhatsAppButton.vue'
import HamburgerMenu from '@/components/navigation/HamburgerMenu.vue'
import CustomImage from '@/components/CustomImage.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isOpen'])
</script>

<template>
  <header class="header" :class="{ 'header--no-shadow': isOpen }">
    <router-link to="/">
      <CustomImage
        src="/src/assets/logomarca.png"
        alt="Pong Logo"
        :aspect-ratio="3.17"
        class="logo"
      />
    </router-link>
    <nav class="desktop_nav">
      <ul class="nav_list">
        <li v-for="item in quickLinks" :key="item.link" class="nav_list__item">
          <router-link :to="item.link">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="actions">
      <WhatsAppButton :icon-only="true" class="mobile_whatsapp" />
      <WhatsAppButton class="desktop_whatsapp" />
      <HamburgerMenu
        v-model:isOpen="props.isOpen"
        @update:isOpen="(val) => emit('update:isOpen', val)"
      />
    </div>
  </header>
</template>

<style scoped lang="css">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;

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

.header--no-shadow {
  box-shadow: none;
  filter: none;
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

.logo {
  width: var(--logo-width);
  height: var(--logo-height);
}

.actions {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.mobile_whatsapp {
  display: none;
}

@media screen and (max-width: 1400px) {
  .header {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-4xl);
  }

  .nav_list__item {
    font-size: var(--text-sm);
  }
}

@media screen and (max-width: 1200px) {
  .header {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-3xl);
  }
}

@media screen and (max-width: 992px) {
  .header {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-2xl);
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding: var(--space-mobile-3xl) var(--container-mobile);
  }

  .desktop_nav {
    display: none;
  }

  .desktop_whatsapp {
    display: none;
  }

  .mobile_whatsapp {
    display: block;
  }
}

@media screen and (max-width: 576px) {
  .header {
    padding: var(--space-mobile-2xl) var(--container-mobile);
  }

  .nav_list {
    gap: var(--space-mobile-sm);
    display: none;
  }

  .nav_list__item {
    font-size: var(--text-xs);
  }
}
</style>
