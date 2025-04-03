<script setup></script>

<template>
  <article class="container">
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere accumsan dignissim.
      Nulla risus magna.
    </h1>

    <img src="https://placehold.co/1200x550" alt="" />
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
  background: rgba(255, 255, 255, 1);
  min-height: 100vh;
  padding: 32px 350px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.container h1 {
  font-family: Work Sans;
  font-weight: 600;
  font-size: 42px;
  line-height: 40px;
  letter-spacing: 0%;

  color: #181a2a;
}

.container img {
  border-radius: 12px;
}

.container p {
  font-family: 'Source Sans 3';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #3b3c4a;
}

.container a {
  font-family: Work Sans;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0%;
  color: #181a2a;
}

@media screen and (max-width: 1440px) {
  .container {
    padding: 32px 80px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 32px 16px;
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: 32px 16px;
  }
}
</style>
