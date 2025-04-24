<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: 'https://placehold.co/360x240',
  },
  imageAlt: {
    type: String,
    default: '',
  },
  maxDescriptionLength: {
    type: Number,
    default: 120,
  },
  to: {
    type: [String, Object],
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
const isImageLoading = ref(true)

function handleClick() {
  emit('click')
}

function handleImageLoad() {
  isImageLoading.value = false
}

function handleImageError() {
  isImageLoading.value = false
  // Could set a fallback image here if needed
}

const isLoading = computed(() => props.loading || isImageLoading.value)
</script>

<template>
  <router-link :to="to" class="card_link">
    <div class="card" @click="handleClick">
      <div class="image_container">
        <div v-if="isLoading" class="image_loading">
          <div class="loading_spinner"></div>
        </div>
        <img
          class="card_thumb"
          :class="{ image_loaded: !isImageLoading }"
          :src="imageUrl"
          :alt="imageAlt"
          @load="handleImageLoad"
          @error="handleImageError"
        />
      </div>
      <div class="content_container">
        <h2 class="card_title">
          <span v-if="isLoading" class="skeleton skeleton_title"></span>
          <span v-else>{{ title }}</span>
        </h2>
        <div class="card_description">
          <template v-if="isLoading">
            <span class="skeleton skeleton_line"></span>
            <span class="skeleton skeleton_line"></span>
            <span class="skeleton skeleton_line" style="width: 70%"></span>
          </template>
          <span v-else>
            {{
              description.length > maxDescriptionLength
                ? description.slice(0, maxDescriptionLength) + '...'
                : description
            }}
          </span>
        </div>
      </div>
      <p class="card_date">
        <span v-if="isLoading" class="skeleton skeleton_date"></span>
        <span v-else>{{ date }}</span>
      </p>
    </div>
  </router-link>
</template>

<style lang="css" scoped>
.card_link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card {
  width: var(--card-width);
  padding: var(--space-lg);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-xl);
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px var(--shadow-image);
}

.image_container {
  position: relative;
  width: 100%;
  aspect-ratio: 1.5;
  background: var(--bg-secondary);
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

.card_thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card_thumb.image_loaded {
  opacity: 1;
}

.card_title {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-2xl);
  line-height: var(--leading-relaxed);
  color: var(--text-heading);
}

.card_description {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  line-height: var(--leading-none);
  color: var(--text-secondary);
}

.card_date {
  font-family: var(--font-primary);
  font-weight: var(--font-regular);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-tertiary);
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    height: auto;
  }

  .card_thumb {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 425px) {
  .card {
    width: 100%;
    height: auto;
  }

  .card_thumb {
    width: 100%;
    height: auto;
  }

  .card_title {
    font-size: var(--text-lg);
  }

  .card_description,
  .card_date {
    font-size: var(--text-xs);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.content_container {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.skeleton {
  display: block;
  background: linear-gradient(
    90deg,
    var(--bg-secondary) 25%,
    var(--border-secondary) 50%,
    var(--bg-secondary) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: var(--radius-sm);
}

.skeleton_title {
  height: var(--text-2xl);
  width: 80%;
  margin-bottom: var(--space-xs);
}

.skeleton_line {
  height: var(--text-base);
  width: 100%;
  display: block;
  margin-bottom: var(--space-2xs);
}

.skeleton_line:last-child {
  margin-bottom: 0;
}

.skeleton_date {
  height: var(--text-base);
  width: 30%;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
