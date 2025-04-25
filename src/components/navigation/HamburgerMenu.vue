<script setup>
import { ref } from 'vue'
import { quickLinks, socialMediaLinks } from '@/config/navigation'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isOpen = ref(false)

// Filter social media links to only show Discord, Instagram, and Twitter
const filteredSocialLinks = socialMediaLinks.filter((link) =>
  ['Discord', 'Instagram', 'Twitter'].includes(link.label),
)

function toggleMenu() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <div class="hamburger_container">
    <button class="hamburger_button" :class="{ active: isOpen }" @click="toggleMenu">
      <span class="hamburger_line"></span>
      <span class="hamburger_line"></span>
      <span class="hamburger_line"></span>
    </button>

    <div v-if="isOpen" class="menu_overlay" @click="closeMenu">
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
  </div>
</template>

<style scoped>
.hamburger_container {
  display: none;
}

.hamburger_button {
  padding: var(--space-md);
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-xs);
  border: none;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.hamburger_line {
  width: 20px;
  height: 2px;
  background: var(--color-white);
  transition: all 0.3s ease;
}

.hamburger_button.active .hamburger_line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger_button.active .hamburger_line:nth-child(2) {
  opacity: 0;
}

.hamburger_button.active .hamburger_line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.menu_overlay {
  position: absolute;
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
  z-index: 1001;
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

@media screen and (max-width: 768px) {
  .hamburger_container {
    display: block;
  }
}
</style>
