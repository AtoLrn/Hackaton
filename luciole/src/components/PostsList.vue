<template>

  <RouterLink to="/actualites/1"  v-for="post in posts" :key="post.id" class="post w-full overflow-hidden relative shadow-md rounded-md">

    <div class="content absolute inset-0 z-10 flex flex-col justify-between p-4">

      <div>
        <p class="pill text-sm w-fit ml-auto px-3 py-1 rounded-3xl">{{post.type}}</p>
      </div>

      <div>
        <div class="text-white flex items-center text-sm">
          <p class="font-light">{{post.source}}</p>&nbsp;|&nbsp;<p>{{post.date}}</p>
        </div>
        <h3 class="text-lg font-medium text-white mb-2">{{post.title}}</h3>
        <p class="text-white text-sm">{{post.content}}</p>
      </div>

    </div>

    <img src="src/assets/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">

  </RouterLink>

</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>

.post {
  height: 50vh;
  transition: transform 0.2s ease-in-out,
              box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--box-shadow-dark);
    cursor: pointer;
  }

  .content {
    background-image: linear-gradient(to top, #000000a3, #ffffff00);

    .pill {
      background-color: #FFBE1A;
      color: #355070;
    }


    h3 {
      font-size: 1.25rem;
      font-family: var(--font-title);
    }

  }

}

</style>
