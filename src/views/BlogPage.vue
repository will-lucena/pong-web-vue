<script setup>
import { ref, onMounted } from 'vue'
import Card from '@/components/card/Card.vue'

const isLoading = ref(true)
const posts = ref([])

onMounted(async () => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000))
  /*
  posts.value = [
    {
      id: 1,
      title: 'Como começar no desenvolvimento de jogos',
      description: 'Lorem ipsum dolor sit amet...',
      date: '03/01/2025',
      imageUrl: 'https://placehold.co/360x240',
      imageAlt: 'Game Development Introduction',
    },
    // ... more posts
  ]
  */
  isLoading.value = false
})

function handlePostClick(post) {
  console.log('Post clicked:', post.title)
  // Add any additional click handling logic here
}
</script>

<template>
  <section class="container">
    <h1>Blog</h1>
    <p>Artigos, noticias e novidades relacionadas a comunidade</p>
    <ul class="posts_list">
      <template v-if="isLoading">
        <li v-for="n in 6" :key="n" class="list_item">
          <Card loading title="Loading..." description="Loading..." date="Loading..." :to="'/'" />
        </li>
      </template>
      <template v-else>
        <li v-for="post in posts" :key="post.id" class="list_item">
          <Card
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :image-url="post.imageUrl"
            :image-alt="post.imageAlt"
            :to="`/blog/${post.id}`"
            @click="() => handlePostClick(post)"
          />
        </li>
      </template>
    </ul>
  </section>
</template>

<style lang="css" scoped>
.container {
  background: var(--bg-primary);
  min-height: 100vh;
  padding: var(--space-3xl) var(--container-desktop);
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
}

.posts_list {
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.list_item {
  list-style: none;
  display: flex;
}

@media screen and (max-width: 1440px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
  }

  .list_item {
    flex: auto;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: var(--space-3xl) var(--container-mobile);
  }

  .list_item {
    width: 45%;
    flex: auto;
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: var(--space-3xl) var(--container-mobile);
  }

  .list_item {
    width: 100%;
  }
}
</style>
