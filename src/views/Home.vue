<script setup>
import { ref, onMounted } from 'vue'
import Card from '@/components/card/Card.vue'
import WhatsAppButton from '@/components/buttons/WhatsAppButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
          <h1 class="hero">Potiguar Indie Games</h1>
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
      <a class="posts_link" href="/blog">
        Ver lista completa
        <FontAwesomeIcon icon="arrow-right" class="arrow-icon" />
      </a>
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
  text-align: right;
  text-decoration: none;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-xs);
}

.arrow-icon {
  font-size: var(--text-sm);
  transition: transform 0.2s ease;
}

.posts_link:hover .arrow-icon {
  transform: translateX(4px);
}

@media screen and (max-width: 1400px) {
  .main {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-4xl);
  }

  .list_item {
    flex: auto;
    display: flex;
  }
}

@media screen and (max-width: 1200px) {
  .main {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-4xl);
  }
}

@media screen and (max-width: 992px) {
  .main {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-4xl);
  }

  .presentation_image {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  .main {
    padding: var(--space-mobile-3xl) var(--container-mobile);
    gap: var(--space-mobile-4xl);
  }

  .presentation {
    gap: var(--space-mobile-xl);
  }

  .presentation_content {
    flex: 1;
    gap: var(--space-mobile-2xl);
  }

  .presentation_image {
    width: 60%;
  }

  .list_item {
    width: 45%;
    flex: auto;
  }

  .posts {
    gap: var(--space-mobile-lg);
  }

  .posts_list {
    gap: var(--space-mobile-sm);
  }
}

@media screen and (max-width: 576px) {
  .main {
    padding: var(--space-mobile-2xl) var(--container-mobile);
    gap: var(--space-mobile-3xl);
  }

  .presentation {
    flex-direction: column;
    gap: var(--space-mobile-xl);
  }

  .presentation_content {
    gap: var(--space-mobile-xl);
  }

  .presentation_image {
    width: 100%;
    height: auto;
  }

  .posts {
    gap: var(--space-mobile-md);
  }

  .posts_list {
    gap: var(--space-mobile-xs);
  }
}
</style>
