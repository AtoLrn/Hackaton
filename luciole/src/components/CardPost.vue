<template>

  <div class="post h-72 w-full overflow-hidden relative shadow-md rounded-md">
    <div class="absolute inset-0 z-10 flex flex-col justify-end post-content p-2">
      <h3 class="text-lg font-medium text-white mb-2">{{toto}}</h3>
      <p class="text-white mb-4">{{test}}</p>
    </div>
    <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">
  </div>

</template>

<script>
export default {
  props: {
    toto: {
      type: String,
      default: "Titre de la carte"
    },
    test: {
      type: String,
      default: "Coucou"
    }
  }
}
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
