<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>

  <header class="text-black dark:text-white bg-white dark:bg-gray-800">
    <Navbar />
  </header>


  <div class="main px-16 py-4">
    <RouterView />
  </div>

</template>

<style scoped>
  header {
    color: black;
    background-color: var(--color-background-soft);
  }
  #test2 {
    display: none;
  }
  @media (max-width: 768px) {
    #test {
      display: none;
    }
    #test2 {
      display: block;
    }
  }
  main {
    color: black;
  }
</style>
