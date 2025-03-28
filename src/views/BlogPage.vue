<script setup>
import Card from '@/components/card/Card.vue'
</script>

<template>
  <main class="main">
    <section class="blog">
      <h1>Blog</h1>
      <ul class="posts_list">
        <li class="list_item">
          <Card />
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="css" scoped>
.main {
  background: rgba(255, 255, 255, 1);
  min-height: 100vh;
  padding: 32px 350px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.posts_list {
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.list_item {
  list-style: none;
}

@media screen and (max-width: 1440px) {
  .main {
    padding: 32px 80px;
  }

  .list_item {
    flex: auto;
  }
}

@media screen and (max-width: 768px) {
  .main {
    padding: 32px 16px;
  }

  .list_item {
    width: 45%;
    flex: auto;
  }
}

@media screen and (max-width: 425px) {
  .main {
    padding: 32px 16px;
  }

  .list_item {
    width: 100%;
  }
}
</style>
