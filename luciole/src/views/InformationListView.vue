<template>

  <div class="grid grid-cols-12">
    <div id="tags-list" class="col-span-12 sm:col-span-8 overflow-x-scroll">
      <ul class="flex flex-wrap gap-2 p-2">
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 1</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 2</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 3</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 4</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 5</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 6</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 7</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 8</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 9</a></li>
        <li class="px-2 py-1 bg-gray-200 rounded-sm"><a href="#" class="text-gray-800 hover:text-gray-700">Tag 10</a></li>
      </ul>
    </div>
    <div class="col-span-12 sm:col-span-4 flex items-center justify-center">
      <input type="text" placeholder="Rechercher" class="px-4 py-2 rounded-sm border border-gray-400 focus:outline-none focus:border-transparent">
    </div>
  </div>

  <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-flow-row gap-4">

      <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md p-4">
        <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
          <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
          <p class="text-white mb-4">Contenu de la carte</p>
        </div>
        <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
      </div>

    <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md p-4">
      <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
        <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
        <p class="text-white mb-4">Contenu de la carte</p>
      </div>
      <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
    </div>

    <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md p-4">
      <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
        <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
        <p class="text-white mb-4">Contenu de la carte</p>
      </div>
      <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
    </div>

    <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md p-4">
      <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
        <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
        <p class="text-white mb-4">Contenu de la carte</p>
      </div>
      <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
    </div>

    <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md p-4">
      <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
        <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
        <p class="text-white mb-4">Contenu de la carte</p>
      </div>
      <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
    </div>

    <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md p-4">
      <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
        <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
        <p class="text-white mb-4">Contenu de la carte</p>
      </div>
      <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
    </div>

    <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md p-4">
      <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
        <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
        <p class="text-white mb-4">Contenu de la carte</p>
      </div>
      <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
    </div>

    <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md p-4">
      <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
        <h3 class="text-lg font-medium text-white mb-2">Titre de la carte</h3>
        <p class="text-white mb-4">Contenu de la carte</p>
      </div>
      <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
    </div>

  </div>
</template>

<script>

</script>

<style scoped>

.post {
  transition: transform 0.2s ease-in-out;
}

.post:hover {
  transform: scale(1.02);
}

.post-content {
  background-image: linear-gradient(to top, #000000a3, #ffffff00);
}

</style>
