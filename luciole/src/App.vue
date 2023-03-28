<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header>
      <nav class="flex justify-between px-16 py-4">
        <div class="w-20 flex items-center">
          <RouterLink to="/">JAJI LOGO</RouterLink>
        </div>
        <ul class="flex justify-evenly w-60">
            <li class="mr-3">
              <RouterLink to="/information-list" class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-white py-2 px-4">Informations</RouterLink>
            </li>
            <li class="mr-3">
              <a class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-white py-2 px-4" href="#">Santé</a>
            </li>
            <li class="mr-3">
              <a class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-white py-2 px-4" href="#">Assurance</a>
            </li>
            <li class="mr-3">
              <RouterLink to="/profile" class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-white py-2 px-4">Profil</RouterLink>
            </li>
          <li class="mr-3">
              <RouterLink to="/login" class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-white py-2 px-4">Connexion</RouterLink>
          </li>
          </ul>
        <div class="w-20">&nbsp;</div>
      </nav>
  </header>


  <div class="main p-16">
    <RouterView />
  </div>

</template>

<style scoped>

  header {
    color: black;
    background-color: var(--color-background-soft);
  }

  main {
    color: black;
  }

</style>
