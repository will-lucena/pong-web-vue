<script setup>
import { ref, onMounted } from 'vue'
import Card from '@/components/card/Card.vue'
import WhatsAppButton from '@/components/buttons/WhatsAppButton.vue'

const isLoading = ref(true)
const recentPosts = ref([])

onMounted(async () => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000))
  recentPosts.value = [
    {
      id: 1,
      title: 'Últimas novidades da comunidade',
      description:
        'Confira as últimas atualizações e eventos da comunidade de desenvolvedores de jogos do RN.',
      date: '03/01/2025',
      imageUrl: 'https://placehold.co/360x240',
      imageAlt: 'Community Updates',
    },
    // ... more posts
  ]
  isLoading.value = false
})

function handlePostClick(post) {
  console.log('Recent post clicked:', post.title)
  // Add any additional click handling logic here
}
</script>

<template>
  <main class="main">
    <section class="presentation">
      <div class="presentation_content">
        <div>
          <h1>Potiguar Indie Games</h1>
          <h3>
            Grupo de desenvolvedores de jogos do Rio Grande do Norte, ajude a consolidar o cenário
            regional.
          </h3>
        </div>
        <WhatsAppButton :show-icon="false" full-width> Juntar-se a Comunidade </WhatsAppButton>
      </div>
      <img class="presentation_image" src="https://placehold.co/540x510" alt="" />
    </section>

    <section class="posts">
      <h2 class="posts_title">Publicações Recentes</h2>
      <ul class="posts_list">
        <template v-if="isLoading">
          <li v-for="n in 3" :key="n" class="list_item">
            <Card loading title="Loading..." description="Loading..." date="Loading..." :to="'/'" />
          </li>
        </template>
        <template v-else>
          <li v-for="post in recentPosts" :key="post.id" class="list_item">
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
      <a class="posts_link" href="/blog">Ver lista completa</a>
    </section>
  </main>
</template>

<style lang="css" scoped>
.main {
  background: var(--bg-primary);
  min-height: 100vh;

  padding: var(--space-3xl) var(--container-desktop);

  display: flex;
  flex-direction: column;
  gap: var(--space-5xl);
}

.presentation {
  display: flex;
  flex-direction: row;
  gap: var(--space-4xl);
}

.presentation_content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.presentation_content h1 {
  font-family: var(--font-primary);
  font-weight: var(--font-bold);
  font-size: var(--text-7xl);
  line-height: var(--leading-none);
  color: var(--text-primary);
}

.presentation_content h3 {
  font-family: var(--font-secondary);
  font-weight: var(--font-regular);
  font-size: var(--text-4xl);
  line-height: var(--leading-loose);
  color: var(--text-secondary);
}

.presentation_image {
  border: none;
  border-radius: var(--radius-lg);

  box-shadow: 0px 5px 30.2px 0px var(--shadow-image);
}

.posts {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.posts_title {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-2xl);
  line-height: var(--leading-relaxed);
  color: var(--text-heading);
}

.posts_list {
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.posts_link {
  font-family: var(--font-secondary);
  font-weight: var(--font-semibold);
  font-size: var(--text-3xl);
  line-height: var(--leading-loose);
  color: var(--text-muted);
  text-align: right;
  text-decoration: none;
}

@media screen and (max-width: 1440px) {
  .main {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-4xl);
  }

  .presentation_content h1 {
    font-size: var(--text-6xl);
  }

  .presentation_content h3 {
    font-size: var(--text-2xl);
  }

  .list_item {
    flex: auto;
    display: flex;
  }
}

@media screen and (max-width: 768px) {
  .main {
    padding: var(--space-3xl) var(--container-mobile);
    gap: var(--space-4xl);
  }

  .presentation {
    gap: var(--space-xl);
  }

  .presentation_content {
    flex: 1;
  }

  .presentation_content h1 {
    font-size: var(--text-6xl);
  }

  .presentation_content h3 {
    font-size: var(--text-2xl);
  }

  .presentation_image {
    width: 60%;
    height: auto;
  }

  .list_item {
    width: 45%;
    flex: auto;
  }

  .posts_title {
    font-size: var(--text-lg);
  }

  .posts_link {
    font-size: var(--text-base);
  }
}

@media screen and (max-width: 425px) {
  .main {
    padding: var(--space-3xl) var(--container-mobile);
    gap: var(--space-4xl);
  }

  .presentation {
    flex-direction: column;
    gap: var(--space-xl);
  }

  .presentation_content h1 {
    font-size: var(--text-5xl);
    text-align: center;
  }

  .presentation_content h3 {
    font-size: var(--text-xl);
    text-align: center;
  }

  .presentation_image {
    width: 100%;
    height: auto;
  }

  .posts_title {
    font-size: var(--text-lg);
  }

  .posts_link {
    font-size: var(--text-base);
  }
}
</style>
