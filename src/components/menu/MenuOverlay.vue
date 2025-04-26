<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { quickLinks, socialMediaLinks } from '@/config/navigation'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isOpen'])

// Filter social media links to only show Discord, Instagram, and Twitter
const filteredSocialLinks = socialMediaLinks.filter((link) =>
  ['Discord', 'Instagram', 'Twitter'].includes(link.label),
)

function closeMenu() {
  emit('update:isOpen', false)
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <div v-if="props.isOpen" class="menu_overlay" @click="closeMenu">
    <div class="menu_content" @click.stop>
      <nav>
        <ul class="menu_list">
          <li v-for="item in quickLinks" :key="item.link" class="menu_item">
            <router-link :to="item.link" @click="closeMenu">{{ item.label }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="social_links">
        <h3>Redes Sociais</h3>
        <ul class="social_list">
          <li v-for="item in filteredSocialLinks" :key="item.link" class="social_item">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon :icon="['fab', item.label.toLowerCase()]" class="social_icon" />
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.menu_content {
  position: fixed;
  top: calc(var(--space-4xl) + var(--logo-height));
  right: 0;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background: var(--bg-primary);
  padding: var(--space-xl);
  box-shadow: -2px 0 10px var(--shadow-header);
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  z-index: 1002;
  overflow-y: auto;
}

.menu_list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.menu_item a {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.menu_item a:hover,
.menu_item a.router-link-active {
  color: var(--color-primary);
}

.social_links {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.social_links h3 {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  color: var(--text-heading);
  margin: 0;
}

.social_list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.social_item a {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  font-family: var(--font-primary);
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.social_item a:hover {
  color: var(--color-primary);
}

.social_icon {
  font-size: var(--text-xl);
  width: 24px;
  text-align: center;
}
</style>
