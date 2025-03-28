<script setup></script>

<template>
  <main class="main">
    <article class="post">
      <header class="post_header">
        <h1 class="post_title">Title</h1>
        <p class="post_date">03/01/2025</p>
      </header>
      <img class="post_image" src="https://placehold.co/1200x600" alt="" />
      <div class="post_content">
        <!-- Add post content here -->
      </div>
    </article>
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

.post {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.post_header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post_image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

@media screen and (max-width: 1440px) {
  .main {
    padding: 32px 80px;
  }
}

@media screen and (max-width: 768px) {
  .main {
    padding: 32px 16px;
  }
}

@media screen and (max-width: 425px) {
  .main {
    padding: 32px 16px;
  }
}
</style>
