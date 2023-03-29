<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>

  <header class="text-black dark:text-white bg-white dark:bg-gray-800">
    <Navbar />
  </header>


  <div class="main p-16">
    <RouterView />
  </div>

</template>

<style scoped>

  header {
    background-color: var(--color-background-soft);
  }

  main {
    color: black;
  }

</style>
