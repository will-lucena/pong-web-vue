<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

defineProps({
  showIcon: {
    type: Boolean,
    default: true,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
})

function openCommunityWhatsapp() {
  window.open('https://chat.whatsapp.com/D3QiWqSvu5qFP5cumncM0o')
}
</script>

<template>
  <button class="whatsapp_button" :class="{ full_width: fullWidth }" @click="openCommunityWhatsapp">
    <font-awesome-icon v-if="showIcon" :icon="faWhatsapp" />
    <slot>Comunidade Whatsapp</slot>
  </button>
</template>

<style scoped>
.whatsapp_button {
  padding: var(--space-lg);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--space-2xs);
  border: none;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  line-height: var(--leading-tight);
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.whatsapp_button.full_width {
  width: 100%;
  justify-content: center;
}

.whatsapp_button:hover {
  opacity: 0.9;
}

@media screen and (max-width: 768px) {
  .whatsapp_button {
    font-size: var(--text-sm);
  }
}

@media screen and (max-width: 425px) {
  .whatsapp_button {
    font-size: var(--text-xs);
  }
}
</style>
