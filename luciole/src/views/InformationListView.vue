<template>

  <div class="sm:p-2 md:p-8 lg:p-16">
    <div class="grid grid-cols-12">
      <TagsList :tags="tags" />
      <div class="col-span-12 sm:col-span-4 flex items-center justify-center">
        <input type="text" placeholder="Rechercher" class="px-4 py-2 rounded-sm border border-gray-400 focus:outline-none focus:border-transparent">
      </div>
    </div>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-flow-row gap-4">

      <CardPost test="Iziaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" toto="titi" />

      <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md">
        <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
          <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
          <p class="text-white mb-4">Contenu de la carte</p>
        </div>
        <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
      </div>

      <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md">
        <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
          <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
          <p class="text-white mb-4">Contenu de la carte</p>
        </div>
        <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
      </div>

      <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md">
        <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
          <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
          <p class="text-white mb-4">Contenu de la carte</p>
        </div>
        <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
      </div>

      <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md">
        <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
          <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
          <p class="text-white mb-4">Contenu de la carte</p>
        </div>
        <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
      </div>
      <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md">
        <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
          <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
          <p class="text-white mb-4">Contenu de la carte</p>
        </div>
        <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
      </div>      <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md">
      <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
        <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
        <p class="text-white mb-4">Contenu de la carte</p>
      </div>
      <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
    </div>


    </div>
  </div>
</template>

<script>

import CardPost from "@/components/CardPost.vue";
import TagsList from "@/components/TagsList.vue";

export default {

  components: {CardPost, TagsList},

  data() {
    return {
      tags: [
        {
          id: 1,
          name: "Tous"
        },
        {
          id: 2,
          name: "Tag 1"
        },
        {
          id: 3,
          name: "Tag 2"
        },
        {
          id: 4,
          name: "Tag 3"
        },
        {
          id: 5,
          name: "Tag 4"
        },
        {
          id: 6,
          name: "Tag 5"
        },
        {
          id: 7,
          name: "Tag 6"
        },
        {
          id: 8,
          name: "Tag 7"
        },
        {
          id: 9,
          name: "Tag 8"
        },
        {
          id: 10,
          name: "Tag 9"
        },
        {
          id: 11,
          name: "Tag 10"
        },
      ]
    }
  }

}


</script>

<style scoped>



</style>
