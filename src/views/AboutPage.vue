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
  background: var(--bg-primary);
  min-height: 100vh;
  padding: var(--space-3xl) var(--container-desktop);
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
}

.about {
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
}

section h1 {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-2xl);
  line-height: var(--leading-relaxed);
  color: var(--text-heading);
}

section div {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

section p {
  font-family: var(--font-secondary);
  font-weight: var(--font-regular);
  font-size: var(--text-xl);
  line-height: var(--leading-loose);
  color: var(--text-secondary);
}

.staff_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--space-4xl);
}

.staff_container p {
  text-align: center;
}

.staff_container img {
  width: var(--staff-image-size);
  height: var(--staff-image-size);
}

@media screen and (max-width: 1440px) {
  .container {
    padding: var(--space-3xl) var(--container-laptop);
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: var(--space-3xl) var(--container-mobile);
  }

  .staff_container {
    gap: var(--space-3xl);
  }

  section div {
    align-items: center;
    flex: 1;
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: var(--space-3xl) var(--container-mobile);
  }
}
</style>
