<template>

  <div id="content" class="md:16 px-32">

    <div class="flex flex-wrap items-center justify-center h-screen">
      <div class="flex flex-row">
        <div id="card-insurance-div">
          <h1 class="mb-12">Bonjour (Elena)</h1>
          <h2 class="mb-1">Voici votre carte de tiers payant !</h2>
          <p class="mb-2">
            Évitez d'avancer les frais.<br>
            Présentez-la aux professionnels de santé
          </p>
          <div id="card" class="h-100">
            <img src="src/assets/img/card.png" alt="Carte d'adhérent">
          </div>
        </div>
      </div>
      <div class="flex flex-row space-x-8">
        <div class="bg-gray-100 p-4 rounded-lg">
          <p class="text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg">
          <p class="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        </div>
      </div>
    </div>


  </div>

</template>

<script>

import TestApi from '@/components/TestApi.vue'
export default {
  components: {TestApi}
}

</script>

<style lang="scss" scoped>

  #content {
    background-image: url('src/assets/img/background.png');
    background-size: cover;

    #card-insurance-div {
      color: var(--color-heading);


    }

  }

</style>
