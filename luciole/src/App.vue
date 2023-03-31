<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import AppLayout from './components/Layout.vue'
</script>

<template>

  <header class="text-black dark:text-white bg-white dark:bg-gray-800">
    <Navbar />
  </header>


  <AppLayout>
    <div class="main">
      <RouterView />
    </div>
  </AppLayout>

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
