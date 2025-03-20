<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light');

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light';
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value);
  saveState('theme', theme.value);
}, { immediate: true });
</script>

<template>
  <nav class="navbar navbar-expand-md bg-parchment border-bottom border-gold"> <!-- UPDATED COLOR -->
    <div class="container gap-2">
      <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-darkbrown"> <!-- UPDATED COLOR -->
        <img class="navbar-brand" alt="logo" src="../assets/img/Quail-kingdom-seal.png" height="45" />
        <b class="fs-5">Quail Kingdom Market</b>
      </RouterLink>
      <!-- collapse button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu text-darkbrown"></span> <!-- UPDATED COLOR -->
      </button>
      <!-- collapsing menu -->
      <div class="collapse navbar-collapse " id="navbar-links">
        <ul class="navbar-nav">
          <li>
            <RouterLink :to="{ name: 'About' }" class="btn text-darkbrown selectable"> <!-- UPDATED COLOR -->
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'Tables' }" class="btn text-darkbrown selectable"> <!-- UPDATED COLOR -->
              Magic Item Tables
            </RouterLink>
          </li>
        </ul>
        <!-- LOGIN COMPONENT HERE -->
        <div class="ms-auto">
          <!-- UPDATED COLOR -->
          <button class="btn text-darkbrown" @click="toggleTheme"
            :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
            <i v-if="theme == 'dark'" class="mdi mdi-weather-sunny"></i>
            <i v-if="theme == 'light'" class="mdi mdi-weather-night"></i>
          </button>
        </div>
        <Login />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
/* UPDATED COLORS */
.bg-parchment {
  background-color: #F5E8D0 !important;
  /* Light parchment color */
}

.border-gold {
  border-color: #D4AF37 !important;
  /* Gold accent */
}

.text-darkbrown {
  color: #3D2B1F !important;
  /* Dark brown/black for better contrast */
}

/* Ensure navbar links match new color */
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid #E1C16E !important;
  /* Golden yellow for active link */
}

/* DARK MODE COLORS */
[data-bs-theme="dark"] {
  --bs-body-bg: #332620 !important;
  /* Dark brown background */
  --bs-body-color: #E1C16E !important;
  /* Golden text */
  --bs-navbar-bg: #2A1E1A !important;
  /* Even darker navbar */
}
</style>
