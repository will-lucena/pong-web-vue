<script setup>
import Card from '@/components/card/Card.vue'
</script>

<template>
  <div>
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
          <button class="community_button presentation_button">Juntar-se a Comunidade</button>
        </div>
        <img class="presentation_image" src="https://placehold.co/540x510" alt="" />
      </section>

      <section class="posts">
        <h2 class="posts_title">Publicações Recentes</h2>
        <ul class="posts_list">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>

          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
        <a class="posts_link" href="">Ver lista completa</a>
      </section>
    </main>
  </div>
</template>

<style lang="css" scoped>
.main {
  background: rgba(255, 255, 255, 1);
  min-height: 100vh;

  padding: 32px 350px;

  display: flex;
  flex-direction: column;
  gap: 100px;
}

.presentation {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.presentation_content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.presentation_content h1 {
  font-family: Work Sans;
  font-weight: 700;
  font-size: 96px;
  line-height: 100%;

  color: #1e1e1e;
}

.presentation_content h3 {
  font-family: 'Source Sans 3';
  font-weight: 400;
  font-size: 32px;
  line-height: 34px;

  color: #3b3c4a;
}

.presentation_image {
  border: none;
  border-radius: 8px;

  box-shadow: 0px 5px 30.2px 0px #00000040;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.posts_title {
  font-family: Work Sans;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;

  color: #181a2a;
}

.posts_list {
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.posts_link {
  font-family: 'Source Sans 3';
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  color: #3b3c4a3d;

  text-align: right;
  text-decoration: none;
}

.community_button {
  padding: 8px 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  border: none;
  border-radius: 5px;

  background: #25be37;
  color: #fff;

  width: fit-content;

  font-family: 'Source Sans 3';
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
}
</style>
