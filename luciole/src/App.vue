<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header id="test" v-if="$route.path !== '/login'">
      <nav class="flex justify-between px-16 items-center">
        <div class="w-20 flex items-center">
          <RouterLink to="/">
            <img src="./assets/img/jaji-logo.png" alt="Logo Jaji" class="h-25">
          </RouterLink>
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


  <div class="main">
    <RouterView />
  </div>

  <header id="test2" style="background-color: red;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nesciunt, quaerat! Consequatur delectus dignissimos minus nulla recusandae rem unde. Aliquid deserunt ducimus nostrum officia perferendis, repellendus rerum sequi vel voluptatem!
  </header>

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
