<script setup>
import CustomImage from '@/components/CustomImage.vue'
</script>

<template>
  <article class="container">
    <h1 class="hero">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere accumsan dignissim.
      Nulla risus magna.
    </h1>

    <CustomImage
      src="https://placehold.co/1200x550"
      alt="Blog post hero image"
      :aspect-ratio="2.18"
    />
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

    <a href="">Link para Incrição no Evento abaixo</a>

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
  </article>
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

.container a {
  color: var(--text-heading);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.container a:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1400px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
  }
}

@media screen and (max-width: 1200px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-3xl);
  }
}

@media screen and (max-width: 992px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
    gap: var(--space-2xl);
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: var(--space-mobile-3xl) var(--container-mobile);
    gap: var(--space-mobile-4xl);
  }
}

@media screen and (max-width: 576px) {
  .container {
    padding: var(--space-mobile-2xl) var(--container-mobile);
    gap: var(--space-mobile-3xl);
  }
}
</style>
