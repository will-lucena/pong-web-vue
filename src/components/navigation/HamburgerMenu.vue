<script setup>
const emit = defineEmits(['update:isOpen'])

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

function toggleMenu() {
  emit('update:isOpen', !props.isOpen)
  if (!props.isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}
</script>

<template>
  <div class="hamburger_container">
    <button class="hamburger_button" :class="{ active: isOpen }" @click="toggleMenu">
      <span class="hamburger_line"></span>
      <span class="hamburger_line"></span>
      <span class="hamburger_line"></span>
    </button>
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

@media screen and (max-width: 768px) {
  .hamburger_container {
    display: block;
  }
}
</style>
