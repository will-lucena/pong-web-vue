<script setup></script>

<template>
  <main class="container">
    <section class="about">
      <div>
        <h1>O que é o pong</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere accumsan
          dignissim. Nulla risus magna, pulvinar dictum euismod at, maximus sit amet eros. Morbi
          tempor pharetra dolor vitae condimentum. Mauris eget dignissim nisi, maximus rutrum magna.
          Duis porttitor gravida metus, ut egestas neque suscipit a. Curabitur congue nulla arcu, ut
          fermentum tortor sodales in. Phasellus fringilla ipsum a velit dignissim, quis condimentum
          urna porta. Phasellus risus eros, volutpat non massa quis, imperdiet laoreet nisl. Nunc
          suscipit diam quis feugiat fermentum. Morbi magna tellus, dignissim non ornare et,
          efficitur et nunc. Duis ultricies eros varius velit pulvinar finibus. Nullam feugiat
          venenatis erat, in venenatis lorem iaculis non.
        </p>
      </div>

      <div>
        <h1>Nossa história</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere accumsan
          dignissim. Nulla risus magna, pulvinar dictum euismod at, maximus sit amet eros. Morbi
          tempor pharetra dolor vitae condimentum. Mauris eget dignissim nisi, maximus rutrum magna.
          Duis porttitor gravida metus, ut egestas neque suscipit a. Curabitur congue nulla arcu, ut
          fermentum tortor sodales in. Phasellus fringilla ipsum a velit dignissim, quis condimentum
          urna porta. Phasellus risus eros, volutpat non massa quis, imperdiet laoreet nisl. Nunc
          suscipit diam quis feugiat fermentum. Morbi magna tellus, dignissim non ornare et,
          efficitur et nunc. Duis ultricies eros varius velit pulvinar finibus. Nullam feugiat
          venenatis erat, in venenatis lorem iaculis non.
        </p>
      </div>

      <div>
        <h1>Organizadores</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere accumsan
          dignissim. Nulla risus magna, pulvinar dictum euismod at, maximus sit amet eros. Morbi
          tempor pharetra dolor vitae condimentum. Mauris eget dignissim nisi, maximus rutrum magna.
          Duis porttitor gravida metus, ut egestas neque suscipit a. Curabitur congue nulla arcu, ut
          fermentum tortor sodales in. Phasellus fringilla ipsum a velit dignissim, quis condimentum
          urna porta. Phasellus risus eros, volutpat non massa quis, imperdiet laoreet nisl. Nunc
          suscipit diam quis feugiat fermentum. Morbi magna tellus, dignissim non ornare et,
          efficitur et nunc. Duis ultricies eros varius velit pulvinar finibus. Nullam feugiat
          venenatis erat, in venenatis lorem iaculis non.
        </p>
      </div>

      <div class="staff_container">
        <div v-for="n in 10" :key="n">
          <img src="https://placehold.co/242" alt="" />
          <p>???</p>
        </div>
      </div>
    </section>
  </main>
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

.about {
  display: flex;
  flex-direction: column;

  gap: 60px;
}

section h1 {
  font-family: Work Sans;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0%;
  color: #181a2a;
}

section div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

section p {
  font-family: 'Source Sans 3';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #3b3c4a;
}

.staff_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 75px;
}

.staff_container p {
  text-align: center;
}
</style>
