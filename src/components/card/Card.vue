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
  width: 392px;
  height: 416px;
  padding: 16px;

  border-radius: 12px;
  border: 1px solid #e8e8ea;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card_thumb {
  border: none;
  border-radius: 6px;
}

.card_title {
  font-family: Work Sans;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;

  color: #181a2a;
}

.card_description {
  font-family: Work Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;

  color: #181a2a8f;
}

.card_date > {
  font-family: Work Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #97989f;
}
</style>
