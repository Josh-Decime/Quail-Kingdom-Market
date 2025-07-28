<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="quail-footer">
    <img src="@/assets/img/Quail-kingdom-seal.png" alt="Quail Kingdom Seal" class="quail-seal">
  </footer>

</template>

<style lang="scss">

/* Global custom cursor */
*, *::before, *::after {
  cursor: url('@/assets/img/Quail-Cursor-32.ico') 2 0, auto !important;
}

body, html {
  cursor: url('@/assets/img/Quail-Cursor-32.ico') 2 0, auto !important;
}


.quail-footer {
  display: flex;
  justify-content: flex-end;
  /* Pushes it to the right */
  align-items: center;
  padding: 10px;
  width: 100%;
}

.quail-seal {
  width: 150px;
  /* Adjust size as needed */
  height: auto;
  opacity: 0.8;
  /* Slight transparency for a subtle effect */
}
</style>
