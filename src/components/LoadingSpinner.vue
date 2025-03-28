<script setup></script>

<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <p class="loading-text">Carregando...</p>
  </div>
</template>

<style scoped>
.loading-container {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #25be37;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-family: 'Work Sans';
  font-size: 16px;
  color: #3b3c4a;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
