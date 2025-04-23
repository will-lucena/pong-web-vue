<script setup>
import Card from '@/components/card/Card.vue'
</script>

<template>
  <section class="container">
    <h1>Blog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere accumsan dignissim.
      Nulla risus magna, pulvinar dictum euismod at, maximus sit amet eros. Morbi tempor pharetra
      dolor vitae condimentum. Mauris eget dignissim nisi, maximus rutrum magna. Duis porttitor
      gravida metus, ut egestas neque suscipit a. Curabitur congue nulla arcu, ut fermentum tortor
      sodales in. Phasellus fringilla ipsum a velit dignissim, quis condimentum urna porta.
      Phasellus risus eros, volutpat non massa quis, imperdiet laoreet nisl. Nunc suscipit diam quis
      feugiat fermentum. Morbi magna tellus, dignissim non ornare et, efficitur et nunc. Duis
      ultricies eros varius velit pulvinar finibus. Nullam feugiat venenatis erat, in venenatis
      lorem iaculis non.
    </p>
    <ul class="posts_list">
      <li v-for="n in 10" :key="n" class="list_item">
        <Card />
      </li>
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

.container h1 {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-2xl);
  line-height: var(--leading-relaxed);
  color: var(--text-heading);
}

.container p {
  font-family: var(--font-secondary);
  font-weight: var(--font-regular);
  font-size: var(--text-xl);
  line-height: var(--leading-loose);
  color: var(--text-secondary);
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
