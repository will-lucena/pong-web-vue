<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  aspectRatio: {
    type: [String, Number],
    default: '1.5',
  },
})

const emit = defineEmits(['load', 'error'])
const isImageLoading = ref(true)

function handleImageLoad(event) {
  isImageLoading.value = false
  emit('load', event)
}

function handleImageError(event) {
  isImageLoading.value = false
  emit('error', event)
}

const isLoading = computed(() => props.loading || isImageLoading.value)
</script>

<template>
  <div class="image_container" :style="{ aspectRatio }">
    <div v-if="isLoading" class="image_loading">
      <div class="loading_spinner"></div>
    </div>
    <img
      class="image"
      :class="{ image_loaded: !isImageLoading }"
      v-bind="$attrs"
      :src="src"
      :alt="alt"
      @load="handleImageLoad"
      @error="handleImageError"
    />
  </div>
</template>

<style scoped>
.image_container {
  position: relative;
  width: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.image_loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
}

.loading_spinner {
  width: var(--spinner-size);
  height: var(--spinner-size);
  border: var(--spinner-border) solid var(--bg-primary);
  border-top: var(--spinner-border) solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.image {
  width: 242px;
  height: 242px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image.image_loaded {
  opacity: 1;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
