<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue'
import MainContent from './components/MainContent/MainContent.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <MainContent />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8fafc;
}

#app {
  min-height: 100vh;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #111827;
    color: #f9fafb;
  }
}
</style>
