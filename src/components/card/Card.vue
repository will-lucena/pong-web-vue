<script setup></script>

<template>
  <div class="card">
    <img class="card_thumb" src="https://placehold.co/360x240" alt="" />
    <div>
      <h2 class="card_title">Titulo do Post do Blog aqui</h2>
      <p class="card_description">
        Leve descrição cortada com no máximo 120 caracteres do post Original.
      </p>
    </div>
    <p class="card_date">03/01/2025</p>
  </div>
</template>

<style lang="css" scoped>
.card {
  width: var(--card-width);
  padding: var(--space-lg);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-xl);

  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.card_thumb {
  border: none;
  border-radius: var(--radius-md);
  width: var(--card-thumb-width);
  height: var(--card-thumb-height);
}

.card_title {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-2xl);
  line-height: var(--leading-relaxed);
  color: var(--text-heading);
}

.card_description {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  line-height: var(--leading-none);
  color: var(--text-secondary);
}

.card_date {
  font-family: var(--font-primary);
  font-weight: var(--font-regular);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-tertiary);
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    height: auto;
  }

  .card_thumb {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 425px) {
  .card {
    width: 100%;
    height: auto;
  }

  .card_thumb {
    width: 100%;
    height: auto;
  }

  .card_title {
    font-size: var(--text-lg);
  }

  .card_description,
  .card_date {
    font-size: var(--text-xs);
  }
}
</style>
